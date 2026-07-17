import { Module } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { MediaModule } from '../media/media.module';

@Module({
  providers: [CertificateService],
  controllers: [CertificateController],
  imports: [MediaModule],
})
export class CertificateModule { }
