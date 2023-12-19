#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Declaration
    string text = get_string("Text: ");

    // See all the characters of the string
    for (int i = 0, len = strlen(text); i < len; i++)
    {
        // Check if isn't the first character
        if (i != 0)
        {
            // See if current character is in order in comparison with latest
            if (text[i] > text[i - 1])
            {
                printf("%c > %c: Yes\n", text[i], text[i - 1]);
            }
            else
            {
                printf("%c < %c: No\n", text[i], text[i - 1]);
            }
        }
        // Show the first letter of the string
        else
        {
            printf("First Letter: %c.\n", text[i]);
        }

    }
}