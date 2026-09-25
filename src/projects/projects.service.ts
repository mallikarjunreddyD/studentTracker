import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { UsersService } from 'src/users/users.service';
import { RegisterProjectDTO } from './DTO/register-project.dto';
import { ProjectType } from 'src/common/enums/projectType.enum';
import { ElibilityService } from './eligibility.service';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly userService: UsersService,
    private readonly eligibilityService: ElibilityService,
  ) {}

  registerProject(registerProjectDTO: RegisterProjectDTO) {
    const { projectType, facultyId, studentIds, semesterStart } =
      registerProjectDTO;

    const faculty = this.userService.findOne(facultyId);
    console.log(faculty);
    if (!faculty || faculty.role != 'FACULTY') {
      throw new Error('invalid faculty');
    }
    let duration = 1;
    if (projectType === ProjectType.HONORS) duration = 4;
    if (projectType === ProjectType.BTP) duration = 2;
    if (projectType === ProjectType.AP) duration = 1;

    const semesterEnd = semesterStart + duration - 1;

    this.eligibilityService.validate(studentIds, projectType);
    
    const project = this.projectRepository.createProject({
      projectType,
      facultyId,
      semesterStart,
      semesterEnd,
      status: 'ACTIVE',
    });
    this.projectRepository.addMembers(project.id, studentIds);
    return project;
  }

  getProjects(filter?: { studentId?: string; facultyId?: string }) {
    if (filter?.studentId) {
      return this.projectRepository.findProjectByStudent(filter.studentId);
    }
    if (filter?.facultyId) {
      return this.projectRepository.findProjectsByFaculty(filter.facultyId);
    }
    return this.projectRepository.findAll();
  }

  getProjectById(id: string) {
    const project = this.projectRepository.findById(id);
    if (!project) {
      return null;
    }
    const members = this.projectRepository.findMembers(id);
    return {
      ...project,
      studentIds: members,
    };
  }

  addMeeting(projectId: string, date: string, notes: string) {
    const project = this.projectRepository.findById(projectId);

    if (!project) {
      throw new Error('Project not found');
    }
    return this.projectRepository.addMeeting(projectId, date, notes);
  }

  getMeetings(projectId: string) {
  const project = this.projectRepository.findById(projectId);

  if (!project) {
    throw new Error('Project not found');
  }

  return this.projectRepository.getMeetingsByProject(projectId);
}
}
