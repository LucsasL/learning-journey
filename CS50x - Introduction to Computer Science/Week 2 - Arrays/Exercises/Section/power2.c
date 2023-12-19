#include <cs50.h>
#include <stdio.h>

void times2(int Array[], int Length);

int main(void)
{
    // Ask for a number
    int length;
    do
    {
        length = get_int("Type the length: ");
    }
    while (length < 1);

    // Declare the Array
    int Numbers[length];
    Numbers[0] = 1;

    // Print the Array
    times2(Numbers, length);
}

void times2(int Array[], int Length)
{
    for (int i = 0; i < Length; i++)
    {
        // Print the number based on it's position
        if (i < Length - 1) {
            printf("%i, ", Array[i]);
        }
        else
        {
            printf("%i.", Array[i]);
        }

        // Multiply the next value by 2
        Array[i + 1] = Array[i] * 2;
    }
    printf("\n");
}