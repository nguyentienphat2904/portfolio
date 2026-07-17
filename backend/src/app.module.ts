import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { MediaModule } from './modules/media/media.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SkillModule } from './modules/skill/skill.module';
import { ProjectCategoryModule } from './modules/project-category/project-category.module';
import { ProjectModule } from './modules/project/project.module';
import { ProjectController } from './modules/project/project.controller';
import { ProjectService } from './modules/project/project.service';
import { ExperienceModule } from './modules/experience/experience.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    CloudinaryModule,
    MediaModule,
    ProfileModule,
    SkillModule,
    ProjectCategoryModule,
    ProjectModule,
    ExperienceModule
  ],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService],
})
export class AppModule { }
