export function calculateDailyWaterIntake(weight: number, age: number) {
  let recommendedIntake = 0;
  if (age <= 17) {
    recommendedIntake = weight * 40;
  } else if (age <= 55) {
    recommendedIntake = weight * 35;
  } else if (age <= 65) {
    recommendedIntake = weight * 30;
  } else {
    recommendedIntake = weight * 25;
  }

  return Math.round(recommendedIntake);
}
