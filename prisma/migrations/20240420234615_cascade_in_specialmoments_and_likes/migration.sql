-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_birthdays" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "birthdays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_birthdays" ("birthdate", "firstName", "gender", "id", "lastName", "surname", "userId") SELECT "birthdate", "firstName", "gender", "id", "lastName", "surname", "userId" FROM "birthdays";
DROP TABLE "birthdays";
ALTER TABLE "new_birthdays" RENAME TO "birthdays";
CREATE TABLE "new_likes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "birthdayId" TEXT,
    CONSTRAINT "likes_birthdayId_fkey" FOREIGN KEY ("birthdayId") REFERENCES "birthdays" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_likes" ("birthdayId", "createdAt", "id", "url") SELECT "birthdayId", "createdAt", "id", "url" FROM "likes";
DROP TABLE "likes";
ALTER TABLE "new_likes" RENAME TO "likes";
CREATE TABLE "new_specialMoments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "birthdayId" TEXT,
    CONSTRAINT "specialMoments_birthdayId_fkey" FOREIGN KEY ("birthdayId") REFERENCES "birthdays" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_specialMoments" ("birthdayId", "createdAt", "id", "url") SELECT "birthdayId", "createdAt", "id", "url" FROM "specialMoments";
DROP TABLE "specialMoments";
ALTER TABLE "new_specialMoments" RENAME TO "specialMoments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
