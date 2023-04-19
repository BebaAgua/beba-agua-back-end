export function calculateDaylyWaterIntake(weight: number, age: number) {
  const recommendedIntake = weight * 30;

  const ageFactor = Math.max(0, (age - 30) / 10);
  const ageAdjustment = recommendedIntake * (ageFactor * 0.1);
  const adjustedIntake = recommendedIntake - ageAdjustment;

  return adjustedIntake;
}
