#include <cs50.h>
#include <stdio.h>

const int N = 3;

float average(int array[], int length);

int main(void)
{
    // Declaring an Array
    int scores[N];

    // Taking the scores with the for loop
    for (int i = 0; i < N; i++)
    {
        scores[i] = get_int("Score %i: ", i + 1);
    }

    // Printing the result of the function average
    printf("Average: %.2f\n", average(scores, N));
}

float average(int array[], int length)
{
    int sum = 0;

    // Do the math and return the result
    for (int i = 0; i < N; i++)
    {
        sum += array[i];
    }
    return sum / (float) N;
}