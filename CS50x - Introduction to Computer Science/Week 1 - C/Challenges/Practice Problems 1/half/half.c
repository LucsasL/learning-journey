// Calculate your half of a restaurant bill
// Data types, operations, type casting, return value

#include <cs50.h>
#include <stdio.h>

float half(float bill, float tax, int tip);

int main(void)
{
    float bill_amount = get_float("Bill before tax and tip: ");
    float tax_percent = get_float("Sale Tax Percent: ");
    int tip_percent = get_int("Tip percent: ");

    printf("You will owe $%.2f each!\n", half(bill_amount, tax_percent, tip_percent));
}

// Return the value of the bill including taxes and a tip
float half(float bill, float tax, int tip)
{
    // Taking the tax value
    float taxVal = (bill * tax) / 100;

    // Adding to a variable
    float res = 0;
    res += bill + taxVal;

    // Taking the tip value and adding to the res variable
    float tipVal = (res * tip) / 100;
    res += tipVal;

    // Returning the value
    return res / 2;
}
