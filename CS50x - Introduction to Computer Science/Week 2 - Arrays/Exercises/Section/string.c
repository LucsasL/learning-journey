#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string emma = "Emma";

    for (int i = 0, len = strlen(emma); i < len; i++)
    {
        printf("%c", emma[i]);
    }
    printf("\n");
}