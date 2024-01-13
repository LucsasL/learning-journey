#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Print "hello, world!"
    printf("Hello, world!\n");

    // Get input from user
    string answer = get_string("What's your name?: ");
    printf("Hi to you too, %s!\n", answer);
}
