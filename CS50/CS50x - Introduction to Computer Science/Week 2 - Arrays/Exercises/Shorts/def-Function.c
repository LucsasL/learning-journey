#include <stdio.h>

int add_two_ints(int a, int b);

int main(void)
{
    printf("The sum of 8 and 9 is %i\n", add_two_ints(5, 9));
}

int add_two_ints(int a, int b)
{
    return a + b;
}