/*
  Warnings:

  - You are about to drop the column `createdAt` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `likes` table. All the data in the column will be lost.
  - Made the column `userId` on table `birthdays` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_birthdays" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "birthdays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_birthdays" ("birthdate", "firstName", "gender", "id", "lastName", "surname", "userId") SELECT "birthdate", "firstName", "gender", "id", "lastName", "surname", "userId" FROM "birthdays";
DROP TABLE "birthdays";
ALTER TABLE "new_birthdays" RENAME TO "birthdays";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT,
    "email" TEXT NOT NULL,
    "birthdate" DATETIME
);
INSERT INTO "new_users" ("birthdate", "email", "firstName", "gender", "id", "lastName") SELECT "birthdate", "email", "firstName", "gender", "id", "lastName" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_likes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "birthdayId" TEXT,
    CONSTRAINT "likes_birthdayId_fkey" FOREIGN KEY ("birthdayId") REFERENCES "birthdays" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_likes" ("birthdayId", "id") SELECT "birthdayId", "id" FROM "likes";
DROP TABLE "likes";
ALTER TABLE "new_likes" RENAME TO "likes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
