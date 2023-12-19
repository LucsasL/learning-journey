#include <cs50.h>
#include <stdio.h>

bool valid_triangle(int a, int b, int c);

int main(void)
{
    int S1 = get_int("Length of the first side: ");
    int S2 = get_int("Length of the second side: ");
    int S3 = get_int("Length of the third side: ");

    if (valid_triangle(S1, S2, S3))
    {
        printf("It is a triangle!\n");
    }
    else
    {
        printf("It isn't a triangle!\n");
    }
}

bool valid_triangle(int a, int b, int c)
{
    if ((a + b > c && b + c > a && a + c > b) && (a > 0 && b > 0 && c > 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}