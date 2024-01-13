#include <cs50.h>
#include <stdio.h>

bool prime(int number);

int main(void)
{
    int min;
    do
    {
        min = get_int("Minimum: ");
    }
    while (min < 1);

    int max;
    do
    {
        max = get_int("Maximum: ");
    }
    while (min >= max);

    for (int i = min; i <= max; i++)
    {
        if (prime(i))
        {
            printf("%i\n", i);
        }
    }
}

bool prime(int number)
{
    // Declaring the count variable
    int count = 0;

    // While i is greater than 1, divide the number by i
    for (int i = number; i > 1; i--)
    {
        // If the number divided by any number is different to zero return true
        if (number % i != 0 && i != number)
        {
            count += 1;
        }

        if (count == number - 1)
        {
            break;
        }
    }

    if (count == number - 2)
    {
        return true;
    }

    return false;
}