// Enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

// For example, let's say you're building a weather app and you want to defined a set of possible weather conditions like "sunny", "cloudy", "rainy", and "snowy". You could define an enum like this:

// First Example: Declaration
enum WeatherConditions {
  Sunny = "Sunny",
  Cloudy = "Cloudy",
  Rainy = "Rainy",
  Snowy = "Snowy",
}

// In this example, WeatherConditions is the name of the enum, and each of the values (e.g Sunny, Cloudy, etc.) is assigned an automatic numerical value starting from 0.

// Second Example: Usage
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
// Output: The current weather is Sunny