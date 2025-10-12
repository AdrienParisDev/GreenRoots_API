/*
  Warnings:

  - You are about to drop the column `image_urls` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "order_item" ADD COLUMN     "planted_on" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "product" DROP COLUMN "image_urls",
ADD COLUMN     "best_seller" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image_paths" VARCHAR(100)[];

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "anonymized_at" TIMESTAMP(3),
ADD COLUMN     "email_validated" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
