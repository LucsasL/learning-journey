#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{

    printf("Name initials: ");
    for (int i = 1; i < argc; i++)
    {
        printf("%c ", argv[i][0]);
    }
    printf("\n");
}