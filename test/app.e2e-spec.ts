import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { NestApplication } from '@nestjs/core';

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
});
