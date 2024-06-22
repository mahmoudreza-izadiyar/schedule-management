import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      console.debug('Attempting to connect to the database...');
      await this.$connect();
      console.debug('Successfully connected to the database.');
    } catch (error) {
      console.error('Error in onModuleInit method:', error);
      throw error;
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    try {
      console.debug('Attempting to close the application...');
      await app.close();
      console.debug('Application closed successfully.');
      console.debug('Attempting to disconnect from the database...');
      await this.$disconnect();
      console.debug('Successfully disconnected from the database.');
    } catch (error) {
      console.error('Error in enableShutdownHooks method:', error);
      throw error;
    }
  }
}
