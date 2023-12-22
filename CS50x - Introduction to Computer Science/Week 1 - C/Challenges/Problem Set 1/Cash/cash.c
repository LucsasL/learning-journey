#include <cs50.h>
#include <stdio.h>

int get_cents(void);
int calculate_quarters(int cents);
int calculate_dimes(int cents);
int calculate_nickels(int cents);
int calculate_pennies(int cents);

int main(void)
{
    // Ask how many cents the customer is owed
    int cents = get_cents();

    // Calculate the number of quarters to give the customer
    int quarters = calculate_quarters(cents);
    cents = cents - quarters * 25;

    // Calculate the number of dimes to give the customer
    int dimes = calculate_dimes(cents);
    cents = cents - dimes * 10;

    // Calculate the number of nickels to give the customer
    int nickels = calculate_nickels(cents);
    cents = cents - nickels * 5;

    // Calculate the number of pennies to give the customer
    int pennies = calculate_pennies(cents);
    cents = cents - pennies * 1;

    // Sum coins
    int coins = quarters + dimes + nickels + pennies;

    // Print total number of coins to give the customer
    printf("%i\n", coins);
}

int get_cents(void)
{
    // Declaring the cents variable
    int cents;

    // Prompt the user for a number of cents
    do
    {
        cents = get_int("Type a number of cents: ");
    }
    while (cents < 0);
    return cents;
}

int calculate_quarters(int cents)
{
    // Declare quarter variable
    int quarters = 0;

    // For each 25¢ is added 1 to the quarter variable
    while (cents > 24)
    {
        cents -= 25;
        quarters++;
    }

    return quarters;
}

int calculate_dimes(int cents)
{
    // Declaring the dimes variable
    int dimes = 0;

    // For each 10¢ is added 1 to the dimes variable
    while (cents > 9)
    {
        cents -= 10;
        dimes++;
    }

    return dimes;
}

int calculate_nickels(int cents)
{
    // Declaring the nickels variable
    int nickels = 0;

    // For each 5¢ is added 1 to the nickels variable
    while (cents > 4)
    {
        cents -= 5;
        nickels++;
    }

    return nickels;
}

int calculate_pennies(int cents)
{
    // Declaring the pennies variable
    int pennies = 0;

    // For each 1¢ is added 1 to the pennies variable
    while (cents >= 1)
    {
        cents -= 1;
        pennies++;
    }

    return pennies;
}
