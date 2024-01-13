#include <cs50.h>
#include <stdio.h>

int factorial(int num);

int main(void)
{
    int num = get_int("Enter a number: ");
    int factor = factorial(num);

    printf("The factorial of %i is %i\n", num, factor);
}

int factorial(int num)
{
    if (num == 1)
    {
        return 1;
    }

    return num * factorial(num - 1);
}