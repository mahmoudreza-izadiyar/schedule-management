import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Prisma } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: Prisma.TaskCreateInput) {
    try {
      return this.tasksService.create(createTaskDto);
    } catch (error) {
      console.error('Error in create method:', error);
      throw error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.tasksService.findAll();
    } catch (error) {
      console.error('Error in findAll method:', error);
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.tasksService.findOne(id);
    } catch (error) {
      console.error('Error in findOne method:', error);
      throw error;
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: Prisma.TaskUpdateInput,
  ) {
    try {
      return this.tasksService.update(id, updateTaskDto);
    } catch (error) {
      console.error('Error in update method:', error);
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.tasksService.remove(id);
    } catch (error) {
      console.error('Error in remove method:', error);
      throw error;
    }
  }
}
