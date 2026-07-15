/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_categoryId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "_ProjectToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectToCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToCategory_B_index" ON "_ProjectToCategory"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToCategory" ADD CONSTRAINT "_ProjectToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToCategory" ADD CONSTRAINT "_ProjectToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "ProjectCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
