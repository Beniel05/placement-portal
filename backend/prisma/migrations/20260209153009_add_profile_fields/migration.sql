/*
  Warnings:

  - Added the required column `degree` to the `StudentProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearOfStudy` to the `StudentProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentProfile" ADD COLUMN     "degree" TEXT NOT NULL,
ADD COLUMN     "yearOfStudy" INTEGER NOT NULL;
