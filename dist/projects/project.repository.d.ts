import { Project } from './projects.interface';
import { Meeting } from './projects.interface';
export declare class ProjectRepository {
    private projects;
    private projectMembers;
    private meetings;
    createProject(project: Omit<Project, 'id'>): Project;
    addMembers(projectId: string, studentIds: string[]): void;
    findAll(): Project[];
    findById(projectId: string): Project | null;
    findMembers(projectId: string): string[];
    findProjectByStudent(studentId: string): Project[];
    findProjectsByFaculty(facultyId: string): Project[];
    addMeeting(projectId: string, date: string, notes: string): Meeting;
    getMeetingsByProject(projectId: string): Meeting[];
}
