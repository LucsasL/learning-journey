#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Declaring the height variable
    int height;

    // requesting the height of the pyramid
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);

    // Printing the pyramids based on the user's input
    // Line
    for (int i = 1; i < height + 1; i++)
    {
        // Column
        for (int j = height - 1; j < height; j++)
        {
            for (int n = 0; n < height - i; n++)
            {
                printf(" ");
            }

            for (int n2 = 0; n2 < i; n2++)
            {
                printf("#");
            }

            // Print the space between the pyramids
            printf("  ");

            for (int n3 = 0; n3 < i; n3++)
            {
                printf("#");
            }
            printf("\n");
        }
    }
}
