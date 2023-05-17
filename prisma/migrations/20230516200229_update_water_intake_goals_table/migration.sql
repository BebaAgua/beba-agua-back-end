/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `water_intake_goals` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "water_intake_goals_userId_key";

-- AlterTable
ALTER TABLE "water_intake_goals" DROP COLUMN "updatedAt";
