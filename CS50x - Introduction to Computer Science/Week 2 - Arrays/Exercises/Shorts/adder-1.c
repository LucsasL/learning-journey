#include <cs50.h>
#include <stdio.h>

int add_two_ints(int a, int b);

int main(void)
{
    // ask for inputs
    int x = get_int("Type an integer: ");
    int y = get_int("Type another integer: ");
    int z = add_two_ints(x, y);

    // Print the result
    printf("The sum of %i and %i is equal to %i\n", x, y, z);
}

// Makes the add of the numbers
int add_two_ints(int a, int b)
{
    int sum = a + b;
    return sum;
}
