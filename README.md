# Welcome to our kata!

Hi! This project aims to test candidates applying for a position in our **engineering squad**. 
We encountered a scenario similar to this one during our 1st release and we're curious to see your approach to this problem. 

## Exercise

We need you to: 

 1. Find the **average amount of positive transactions** for the **6 months** prior to the *most recent transaction*. To clarify, the formula is:  
 Sum of positive transactions / Number of positive transactions
 2. Find the **Min** and **Max** balance of the *test user* accounts whole history (all accounts aggregated!)
 3. Check if the user have at least **3 years of transaction history** between the oldest and the most recent transaction (all accounts aggregated!)

## API

We set up a minimal REST API with 3 endpoints:

Endpoint  | Data | Method
------------ | ------------- | ---------
/accounts | Fetch all bank accounts from a *test user*. | [GET]
/accounts/:account_id/transactions?from=*start_date*&to=*end_date* | Fetch the specified *account_id* transactions from the *start_date* to the *end_date*. It can't return more than **365 days** of transactions. If there are no date specified, the oldest transaction will be returned. | [GET]
/answer | Post your results in the body, the body needs to be of type AnswerDto. Every number needs to be rounded to the minimum. | [POST]

Root endpoint is : https://kata.getmansa.com/

You can find the *Data Transfer Object* (DTO) for the answer object in the `src/common/dto/` folder of this repo. You will also find *Response Objects* (RO) for the accounts and the transactions in the `src/common/ro/` folder.

## Project

- **Your project must be written in TypeScript**

- **You have to deliver a working NestJS project**

- **Your project must expose a `GET /answer` endpoint responding with an `AnswerDto` object**

We want you to write code that meets the highest industry standard. It must be **fast**, **robust**, **readable**, and you need to **include tests** as well.

Good luck and have fun!

*For any question, feel free to send me an email at remy.tinco '@' getmansa.com.*
