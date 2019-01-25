# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React ATM application

--------

Let's practice modifying an existing codebase. This repository contains the code for existing ATM application using React. In it, you can currently deposit money into a checking account.

You'll be adding a few features to this:
- The ability to withdraw money
- Having a savings account as well as a checking account

In the end, your solution will look like this:

<img width="992" alt="atm" src="https://cloud.githubusercontent.com/assets/4304660/24376818/18c39a82-12f2-11e7-81e7-af618c22b3ed.png">

--------

## Setting up:

- Fork and then clone this repo

- Run `npm install`. To launch the app, run `npm start`.

- The code that's running is in the `/src` directory - that's what you need to change!

You can do the below tasks in any order you'd like.

--------

## Turning in:

- Remember to make a pull request with your completed work in order to be given credit for this assignment

---------

## Task:

Currently, you can see that there is a Checking account where a user can deposit money. Try it out - it works!
- Create a "Withdraw" button next to the "Deposit" button.
  - You should not be able to withdraw more than the current balance.
- Create a Savings account - another component of the same class.
  - It will have the same deposit (and eventual withdraw) functionality.
- You cannot type negative numbers in to either withdraw or deposit.

-------

### Hints:
<details>
<summary>Stuck on making a Savings account? Here's a hint:</summary>
The <code>name</code> prop being passed into <code>Account</code> is "Checking" - perhaps you can just call the component again for "Savings".   
</details>

<details>
<summary>Stuck on making a Withdraw button? Here's a hint:</summary>
Functionality to withdraw money is quite similar to functionality for depositing money, except with subtraction instead of addition.
</details>

<details>
<summary>Stuck on limiting negative numbers? Here's a hint:</summary>
When a function checks if the input is a number (with <code>isNaN</code>), an <code>||</code> condition could be added to be sure the input is not less than 0.
</details>
