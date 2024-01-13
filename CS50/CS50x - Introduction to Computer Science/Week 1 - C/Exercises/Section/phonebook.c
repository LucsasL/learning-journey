#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Declaring and Assigning variables
    string name = get_string("What's your name?: ");
    int age = get_int("How old are you?: ");
    string number = get_string("What's is your phone number?: ");

    printf("Name is %s, Age is %i. Phone number is %s.\n", name, age, number);

    if (calls < 1)
    {
        printf("Call more often!\n");
    }
    else
    {
        printf("Thanks for calling!\n");
    }
}
