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
    CONSTRAINT "birthdays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_birthdays" ("birthdate", "firstName", "gender", "id", "lastName", "surname", "userId") SELECT "birthdate", "firstName", "gender", "id", "lastName", "surname", "userId" FROM "birthdays";
DROP TABLE "birthdays";
ALTER TABLE "new_birthdays" RENAME TO "birthdays";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
