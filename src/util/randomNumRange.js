export default function getRandomNumber(min, max, decimalPlaces = 1) {
  // Ensure that the input values are valid
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both arguments must be numbers');
  }

  // Swap values if min is greater than max
  if (min > max) {
    [min, max] = [max, min];
  }

  // Calculate the multiplier for the desired decimal places
  const multiplier = Math.pow(10, decimalPlaces);

  // Generate a random number within the specified range
  const randomNumber = Math.random() * (max - min) + min;

  // Round the number to the specified decimal places
  const roundedNumber = Math.round(randomNumber * multiplier) / multiplier;

  return roundedNumber;
}