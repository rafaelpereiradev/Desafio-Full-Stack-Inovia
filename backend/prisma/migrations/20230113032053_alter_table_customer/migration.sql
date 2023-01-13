/*
  Warnings:

  - You are about to drop the column `customer_password` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `customer_username` on the `customers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_customer_username_customer_password_fkey";

-- DropIndex
DROP INDEX "customers_customer_username_customer_password_key";

-- DropIndex
DROP INDEX "users_username_password_key";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "customer_password",
DROP COLUMN "customer_username",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customers_userId_key" ON "customers"("userId");

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
