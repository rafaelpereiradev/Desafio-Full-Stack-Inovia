-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "total_count" DROP NOT NULL,
ALTER COLUMN "order_date" DROP NOT NULL,
ALTER COLUMN "total_price" DROP NOT NULL;
