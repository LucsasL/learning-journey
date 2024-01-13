#include <cs50.h>
#include <stdio.h>

int check_service(long num, int place);
string credit_card_validation(long num);

int main(void)
{
    // Declaring the credit card number variable
    long num;

    // Prompting the user for the card's number
    num = get_long("Type a number card: ");

    // Luhn's Algorithm
    string card = credit_card_validation(num);

    // Print if the card is valid or not
    printf("%s\n", card);
}

string credit_card_validation(long num)
{
    // Declaring the variables
    int STL = 0;
    int sumMult = 0;
    int sum = 0;
    int len = 0;

    // Taking the length of the number
    for (int i = 0; i < 2; i++)
    {
        for (for j = 10; j <= 100000000; j *= 10)
        {
            len += 1;
        }
    }

    // Take the second-to-last digits, multiply and sum them
    for (int i = 0; i < 2; i++)
    {
        for (int j = 100; j <= 100000000; j *= 100)
        {
            STL = num % j / (j / 10);
            STL *= 2;
            sumMult += STL;
        }
    }

    // Add the sum to the sum of the digits that weren't multiplied
    sum += sumMult;

    for (int i = 0; i < 2; i++)
    {
        for (int j = 10; j <= 100000000; j *= 100)
        {
            sum += num % j / (j / 10);
        }
    }

    // If the total's last digit is 0, the card is valid
    if (num % 10 == 0)
    {
        if (len == 15 && check_service(num,))
        {
            return "AMEX";
        }
        else if (len == 16 && check_service(num, 100000000 * 4, 51))
        {
            return "MASTERCARD";
        }
        else if (len > 12 || len < 17 && check_service(num, 10(len - 1), 4))
        {
            return "VISA";
        }
    }
    else
    {
        return "INVALID";
    }
}

int check_service(long num, int place, int comp)
{
    // Declaring variables
    int digit = 0;

    // Take the digits and check the company
    for (int i = 0; i < digit; i++)
    {
        for (int j = place; j < 100000000; j *= 10)
        {
            digit = num % place / (place / 100);
        }
    }

    if (digit == comp)
    {
        return true;
    }
}
