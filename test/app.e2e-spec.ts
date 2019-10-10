import { NestApplication } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

const REMOTE_ENDPOINT =
  process.env.REMOTE_ENDPOINT || 'https://kata.getmansa.com';

describe('Kanedama', () => {
  let app: NestApplication;

  beforeEach(() =>
    Test.createTestingModule({
      imports: [AppModule],
    })
      .compile()
      .then((testingModule: TestingModule) =>
        testingModule.createNestApplication().init(),
      )
      .then(
        (testingApplication: NestApplication) => (app = testingApplication),
      ),
  );

  it('should be initialized', () =>
    expect(app).toBeInstanceOf(NestApplication));

  describe('GET /answer', () => {
    it('should respond with the correct answer', () =>
      request(app.getHttpServer())
        .get('/answer')
        .expect(HttpStatus.OK)
        .expect('Content-Type', /json/)
        .expect(({ body: applicantAnswer }) =>
          expect(applicantAnswer).toMatchObject({
            '6_month_average_income': expect.any(Number),
            min_balance: expect.any(Number),
            max_balance: expect.any(Number),
            '3_years_activity': expect.any(Number),
          }),
        )
        .then(({ body: applicantAnswer }) =>
          request(REMOTE_ENDPOINT)
            .post('/answer')
            .send(applicantAnswer)
            .expect(HttpStatus.CREATED)
            .then(({ body: { answer: validationStatus } }) =>
              expect(validationStatus).toMatch(/^Congratz!/),
            ),
        ));
  });
});
