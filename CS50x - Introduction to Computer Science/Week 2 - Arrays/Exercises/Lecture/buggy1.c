#include <cs50.h>
#include <stdio.h>

long get_negative_int(void);

int main(void)
{
    long i = get_negative_int();
    printf("%li\n", i);
}

long get_negative_int(void)
{
    long n;
    do
    {
        n = get_long("Negative integer: ");
    }
    while (n >= 0);
    return n;
}