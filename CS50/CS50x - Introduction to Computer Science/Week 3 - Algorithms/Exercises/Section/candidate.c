#include <cs50.h>
#include <stdio.h>

typedef struct
{
    string name;
    int votes;
}
candidate;

candidate get_candidate(int num);

int main(void)
{
    candidate candidates_array[3];
    candidates_array[0] = get_candidate(0);

    for (int j = 0; j < 3; j++)
    {
        printf("\n-=-=-= Candidate: %i -=-=-=\n", j);
        printf("Name: %s\n", candidates_array[j].name);
        printf("Number of votes: %i\n", candidates_array[j].votes);
    }
}

candidate get_candidate(int num)
{
    candidate c[3];
    if (num <= 0)
    {
        return c[num];
    }
    else
    {
        printf("-=-=-= Fill the data of the candidate %i -=-=-=\n", num - (num - 1));
        c[num].name = get_string("Enter a name: ");
        c[num].votes = get_int("Enter a number of votes: ");
        return c[num];
        get_candidate(num + 1);
    }
}