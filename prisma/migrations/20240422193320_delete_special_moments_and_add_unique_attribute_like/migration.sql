/*
  Warnings:

  - You are about to drop the `specialMoments` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[description]` on the table `likes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "specialMoments";
PRAGMA foreign_keys=on;

-- CreateIndex
CREATE UNIQUE INDEX "likes_description_key" ON "likes"("description");
