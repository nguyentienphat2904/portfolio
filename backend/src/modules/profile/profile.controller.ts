import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateProfileRequestDto } from './dto/update-profile-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProfileService } from './profile.service';
import { HasRoles } from '@/common/decorator/has-roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags("Profile")
@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService,) { }
    @Get()
    getProfile() { return this.profileService.getProfile(); }

    @Patch()
    @UseGuards(JwtAuthGuard)
    @HasRoles(UserRole.ADMIN)
    @ApiBearerAuth("access-token")
    updateProfile(
        @Body() dto: UpdateProfileRequestDto,) { return this.profileService.update(dto); }
}
