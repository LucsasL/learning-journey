#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    printf("After: ");

    for (int i = 0, len = strlen(s); i < len; i++)
    {
        printf("%c", toupper(s[i]));
    }
    printf("\n");

}