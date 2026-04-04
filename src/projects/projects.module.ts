import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectRepository } from './project.repository';
import { UsersService } from 'src/users/users.service';
import { UserRepository } from 'src/users/users.repository';
import { UsersModule } from 'src/users/users.module';
import { ElibilityService } from './eligibility.service';

@Module({
  imports: [UsersModule],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectRepository, ElibilityService],
})
export class ProjectsModule {}
