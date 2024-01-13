#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Takes the input
    char c = get_char("Do you agree? [Y / N]: ");

    // Make different descisions based on the value
    if (c == 'y' || c == 'Y')
    {
        printf("Agreed.\n");
    }
    else if (c == 'n' || c == 'N')
    {
        printf("Not agreed.\n");
    }
    else
    {

    }
}
