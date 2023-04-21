-- CreateTable
CREATE TABLE "water_intake_goals" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "goalAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "water_intake_goals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "water_intake_goals_userId_key" ON "water_intake_goals"("userId");

-- AddForeignKey
ALTER TABLE "water_intake_goals" ADD CONSTRAINT "water_intake_goals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
