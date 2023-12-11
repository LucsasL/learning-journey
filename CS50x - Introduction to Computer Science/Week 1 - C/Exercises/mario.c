#include <cs50.h>
#include <stdio.h>

int get_size(void);
void print_grid(int n);

int main(void)
{
    // Get size of grid
    int n = get_size();

    // Prints grid of bricks
    print_grid(n);
}

int get_size(void)
{
    int size;

    do {
        size = get_int("Size: ");
    }
    while (size < 1);

    return size;
}

void print_grid(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}