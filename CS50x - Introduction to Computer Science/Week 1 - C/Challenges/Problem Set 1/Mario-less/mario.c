#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Declaring the height variable
    int height;

    // Requesting the height of the pyramid
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);

    // Printing the pyramid based on the user's input
    // Line
    for (int i = 1; i < height + 1; i++)
    {
        // Column
        for (int j = height; j > height - 1; j--)
        {
            for (int n = 0; n < height - i; n++)
            {
                printf(" ");
            }

            for (int n2 = 0; n2 < i; n2++)
            {
                printf("#");
            }
            printf("\n");
        }
    }
}
