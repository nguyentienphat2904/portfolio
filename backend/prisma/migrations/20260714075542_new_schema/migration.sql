/*
  Warnings:

  - You are about to drop the column `isRead` on the `ContactMessage` table. All the data in the column will be lost.
  - Added the required column `type` to the `Certification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('PLANNING', 'DEVELOPMENT', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "CertificationType" AS ENUM ('COURSE', 'PROFESSIONAL', 'ACADEMIC');

-- CreateEnum
CREATE TYPE "ContactStatus" AS ENUM ('NEW', 'REPLIED', 'ARCHIVED');

-- AlterTable
ALTER TABLE "Certification" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "type" "CertificationType" NOT NULL;

-- AlterTable
ALTER TABLE "ContactMessage" DROP COLUMN "isRead",
ADD COLUMN     "status" "ContactStatus" NOT NULL DEFAULT 'NEW';

-- AlterTable
ALTER TABLE "Education" ADD COLUMN     "description" TEXT,
ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "location" TEXT,
ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "content" TEXT,
ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "status" "ProjectStatus" NOT NULL DEFAULT 'COMPLETED';

-- AlterTable
ALTER TABLE "ProjectCategory" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "level" INTEGER;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "location" TEXT,
    "email" TEXT,
    "resumeUrl" TEXT,
    "avatarId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteSetting" (
    "id" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT[],
    "faviconId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteSetting" ADD CONSTRAINT "SiteSetting_faviconId_fkey" FOREIGN KEY ("faviconId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
