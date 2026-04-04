import { map } from 'rxjs';
import { Project, ProjectMember } from './projects.interface';
import { randomUUID } from 'crypto';
import { Meeting } from './projects.interface';
export class ProjectRepository {
  private projects: Project[] = [];
  private projectMembers: ProjectMember[] = [];
  private meetings: Meeting[] = [];

  createProject(project: Omit<Project, 'id'>): Project {
    const newProject: Project = {
      id: randomUUID(),
      ...project,
    };
    this.projects.push(newProject);
    return newProject;
  }

  addMembers(projectId: string, studentIds: string[]): void {
    const members = studentIds.map((studentId) => ({
      projectId,
      studentId,
    }));
    this.projectMembers.push(...members);
  }
  findAll(): Project[] {
    return this.projects;
  }
  findById(projectId: string): Project | null {
    return this.projects.find((project) => project.id === projectId) || null;
  }
  findMembers(projectId: string): string[] {
    return this.projectMembers
      .filter((projectMember) => projectMember.projectId === projectId)
      .map((projectMember) => projectMember.studentId);
  }
  findProjectByStudent(studentId: string): Project[] {
    const projectIds = this.projectMembers
      .filter((projectMember) => projectMember.studentId === studentId)
      .map((projectMember) => projectMember.projectId);
    return this.projects.filter((p) => projectIds.includes(p.id));
  }
  findProjectsByFaculty(facultyId: string): Project[] {
    return this.projects.filter((p) => p.facultyId === facultyId);
  }

  addMeeting(projectId: string, date: string, notes: string): Meeting {
    const meeting: Meeting = {
      id: randomUUID(),
      projectId,
      date,
      notes,
    };

    this.meetings.push(meeting);
    return meeting;
  }

  getMeetingsByProject(projectId: string): Meeting[] {
    return this.meetings.filter((m) => m.projectId === projectId);
  }
}
