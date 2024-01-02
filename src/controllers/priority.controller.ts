
    import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
    import { Priority } from 'src/models/priority.entity';
    import { PrioritysService } from '../services/priority.service';
import { IPriorityDTO } from 'src/interfaces/general';
    
    @Controller('priority')
    export class PrioritysController {
      constructor(private readonly prioritysService: PrioritysService) {}
    
      @Get()
      async getAllPrioritys(): Promise<Priority[]> {
        return this.prioritysService.findAll();
      }
      @Get('id')
      getPriorityById(@Param('id') id: number): Priority{
        return this.prioritysService.getPriorityById(id);
      }
      @Post()
      async createPriority(@Body() priorityData: IPriorityDTO): Promise <Priority>{
        return Priority.create({name: priorityData.name, color: priorityData.color})
      }
       @Put(':id')
      update(@Param('id') id:number, @Body() priorityData: IPriorityDTO){
        return this.prioritysService.updatePriority(id, priorityData)
      }
         @Delete('id')
          remove(@Param('id') id: number){
          return this.prioritysService.remove(id);
      }
    }