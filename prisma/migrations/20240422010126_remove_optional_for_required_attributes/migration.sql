/*
  Warnings:

  - Made the column `birthdayId` on table `likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthdayId` on table `specialMoments` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_likes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "birthdayId" TEXT NOT NULL,
    CONSTRAINT "likes_birthdayId_fkey" FOREIGN KEY ("birthdayId") REFERENCES "birthdays" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_likes" ("birthdayId", "description", "id") SELECT "birthdayId", "description", "id" FROM "likes";
DROP TABLE "likes";
ALTER TABLE "new_likes" RENAME TO "likes";
CREATE TABLE "new_specialMoments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "birthdayId" TEXT NOT NULL,
    CONSTRAINT "specialMoments_birthdayId_fkey" FOREIGN KEY ("birthdayId") REFERENCES "birthdays" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_specialMoments" ("birthdayId", "createdAt", "id", "url") SELECT "birthdayId", "createdAt", "id", "url" FROM "specialMoments";
DROP TABLE "specialMoments";
ALTER TABLE "new_specialMoments" RENAME TO "specialMoments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
