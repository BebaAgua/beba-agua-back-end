-- CreateTable
CREATE TABLE "water_intakes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "water_intakes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "water_intakes" ADD CONSTRAINT "water_intakes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
