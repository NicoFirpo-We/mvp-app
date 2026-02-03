/*
  Warnings:

  - Added the required column `updated_at` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "scope" TEXT,
ADD COLUMN     "token_type" TEXT NOT NULL DEFAULT 'bearer',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
