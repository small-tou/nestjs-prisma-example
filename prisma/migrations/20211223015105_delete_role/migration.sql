/*
  Warnings:

  - You are about to drop the column `user_role` on the `tag` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "use_count" INTEGER NOT NULL DEFAULT 0,
    "user_id" TEXT NOT NULL DEFAULT '',
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_tag" ("created_at", "id", "is_delete", "name", "uid", "updated_at", "use_count", "user_id") SELECT "created_at", "id", "is_delete", "name", "uid", "updated_at", "use_count", "user_id" FROM "tag";
DROP TABLE "tag";
ALTER TABLE "new_tag" RENAME TO "tag";
CREATE UNIQUE INDEX "tag_uid_key" ON "tag"("uid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
