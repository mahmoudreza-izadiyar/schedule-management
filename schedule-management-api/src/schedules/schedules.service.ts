import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Schedule, Prisma } from '@prisma/client';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ScheduleCreateInput): Promise<Schedule> {
    try {
      return await this.prisma.schedule.create({ data });
    } catch (error) {
      console.error('Error in create method:', error);
      throw error;
    }
  }

  async findAll(): Promise<Schedule[]> {
    try {
      return await this.prisma.schedule.findMany();
    } catch (error) {
      console.error('Error in findAll method:', error);
      throw error;
    }
  }

  async findOne(id: string): Promise<Schedule | null> {
    try {
      return await this.prisma.schedule.findUnique({ where: { id } });
    } catch (error) {
      console.error('Error in findOne method:', error);
      throw error;
    }
  }

  async update(
    id: string,
    data: Prisma.ScheduleUpdateInput,
  ): Promise<Schedule> {
    try {
      return await this.prisma.schedule.update({ where: { id }, data });
    } catch (error) {
      console.error('Error in update method:', error);
      throw error;
    }
  }

  async remove(id: string): Promise<Schedule> {
    try {
      return await this.prisma.schedule.delete({ where: { id } });
    } catch (error) {
      console.error('Error in remove method:', error);
      throw error;
    }
  }
}
