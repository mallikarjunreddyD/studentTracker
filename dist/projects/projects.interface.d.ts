import { ProjectType } from "src/common/enums/projectType.enum";
export interface Project {
    id: string;
    projectType: ProjectType;
    facultyId: string;
    semesterStart: number;
    semesterEnd: number;
    status: 'ACTIVE' | 'COMPLETED';
}
export interface ProjectMember {
    projectId: string;
    studentId: string;
}
export interface Meeting {
    id: string;
    projectId: string;
    date: string;
    notes: string;
}
