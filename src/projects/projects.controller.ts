import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { RegisterProjectDTO } from './DTO/register-project.dto';
import { AddMeetingDTO } from './DTO/add-meeting.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Roles(Role.FACULTY)
  @Post('register')
  registerProject(@Body() registerProjectDTO: RegisterProjectDTO) {
    return this.projectsService.registerProject(registerProjectDTO);
  }
  @Get()
  getProjects(
    @Query('studentId') studentId?: string,
    @Query('facultyId') facultyId?: string,
  ) {
    return this.projectsService.getProjects({ studentId, facultyId });
  }
  @Get(':id')
  getProjectById(@Param('id') id: string) {
    return this.projectsService.getProjectById(id);
  }

  @Roles(Role.FACULTY)
  @Post(':id/meetings')
  addMeeting(@Param('id') projectId: string, @Body() dto: AddMeetingDTO) {
    return this.projectsService.addMeeting(projectId, dto.date, dto.notes);
  }
  @Get(':id/meetings')
  getMeetings(@Param('id') projectId: string) {
    return this.projectsService.getMeetings(projectId);
  }
}
