import { ProjectsService } from './projects.service';
import { RegisterProjectDTO } from './DTO/register-project.dto';
import { AddMeetingDTO } from './DTO/add-meeting.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    registerProject(registerProjectDTO: RegisterProjectDTO): import("./projects.interface").Project;
    getProjects(studentId?: string, facultyId?: string): import("./projects.interface").Project[];
    getProjectById(id: string): {
        studentIds: string[];
        id: string;
        projectType: import("../common/enums/projectType.enum").ProjectType;
        facultyId: string;
        semesterStart: number;
        semesterEnd: number;
        status: "ACTIVE" | "COMPLETED";
    } | null;
    addMeeting(projectId: string, dto: AddMeetingDTO): import("./projects.interface").Meeting;
    getMeetings(projectId: string): import("./projects.interface").Meeting[];
}
