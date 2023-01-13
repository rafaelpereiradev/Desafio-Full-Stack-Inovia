/*
  Warnings:

  - A unique constraint covering the columns `[username,password]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "photo" TEXT NOT NULL,
    "customer_username" TEXT NOT NULL,
    "customer_password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_customer_username_customer_password_key" ON "customers"("customer_username", "customer_password");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_password_key" ON "users"("username", "password");

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_customer_username_customer_password_fkey" FOREIGN KEY ("customer_username", "customer_password") REFERENCES "users"("username", "password") ON DELETE RESTRICT ON UPDATE CASCADE;
