#include <cs50.h>
#include <stdio.h>
#include <string.h>

const int BITS_IN_BYTE = 8;

void print_bulb(int bit);

int main(void)
{
    // Prompt the user for a message
    msg = get_string("Message: ");

    // Transforming the message to binary code
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            msg[j] = 2 ^ j;
        }
    }

    // Print the message in binary code
    for (int i = 0, len = strlen(binary); i < len; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            print_bulb(binary[j]);
        }
        printf("\n");
    }
}

void print_bulb(int bit)
{
    if (bit == 0)
    {
        // Dark emoji
        printf("\U000026AB");
    }
    else if (bit == 1)
    {
        // Light emoji
        printf("\U0001F7E1");
    }
}