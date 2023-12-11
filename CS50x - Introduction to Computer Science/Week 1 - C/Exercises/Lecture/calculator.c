#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Gets the input
    long x = get_long("X: ");
    long y = get_long("Y: ");

    // Assign division and print it
    double z = (double) x / (double) y;
    printf("%.20f\n", z);
}
