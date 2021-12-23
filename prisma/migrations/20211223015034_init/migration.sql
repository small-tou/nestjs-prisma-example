-- CreateTable
CREATE TABLE "tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "use_count" INTEGER NOT NULL DEFAULT 0,
    "user_id" TEXT NOT NULL DEFAULT '',
    "user_role" INTEGER DEFAULT 1,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "tag_uid_key" ON "tag"("uid");
