/*
  Warnings:

  - You are about to drop the column `resumeUrl` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId,mediaId]` on the table `ProjectImage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folder` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `SocialLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SocialLink` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `platform` on the `SocialLink` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('GITHUB', 'LINKEDIN', 'FACEBOOK', 'INSTAGRAM', 'X', 'YOUTUBE', 'EMAIL');

-- CreateEnum
CREATE TYPE "MediaFolder" AS ENUM ('PROJECT', 'CERTIFICATE', 'LOGO', 'PROFILE', 'RESUME', 'OTHER');

-- AlterTable
ALTER TABLE "ContactMessage" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "folder",
ADD COLUMN     "folder" "MediaFolder" NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "resumeUrl",
ADD COLUMN     "resumeId" TEXT;

-- AlterTable
ALTER TABLE "SocialLink" ADD COLUMN     "profileId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "platform",
ADD COLUMN     "platform" "SocialPlatform" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProjectImage_projectId_mediaId_key" ON "ProjectImage"("projectId", "mediaId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
