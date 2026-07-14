import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck() {
    return {
      success: true,
      status: 'UP',
      service: 'portfolio-api',
      version: '1.0.0',
      environment: process.env.NODE_ENV ?? 'development',
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    };
  }
}
