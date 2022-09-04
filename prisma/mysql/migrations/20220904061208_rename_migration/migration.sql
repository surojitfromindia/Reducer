/*
  Warnings:

  - You are about to drop the column `test_number` on the `TestTable` table. All the data in the column will be lost.
  - Added the required column `test_age` to the `TestTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TestTable` RENAME COLUMN `test_number` to `test_age`;