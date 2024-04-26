function myFunction(invalidInputParam) {
  try {
    invalidInputParam += "Will it work? Nah.";
    return invalidInputParam;
  } catch (error) {
    throw new Error("This error is being thrown due to invalid input.");
  }
}

invalidInput = 0;
