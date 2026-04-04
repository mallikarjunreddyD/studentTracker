import { ProjectRepository } from './project.repository';
import { UsersService } from 'src/users/users.service';
import { RegisterProjectDTO } from './DTO/register-project.dto';
import { ProjectType } from 'src/common/enums/projectType.enum';
import { ElibilityService } from './eligibility.service';
export declare class ProjectsService {
    private readonly projectRepository;
    private readonly userService;
    private readonly eligibilityService;
    constructor(projectRepository: ProjectRepository, userService: UsersService, eligibilityService: ElibilityService);
    registerProject(registerProjectDTO: RegisterProjectDTO): import("./projects.interface").Project;
    getProjects(filter?: {
        studentId?: string;
        facultyId?: string;
    }): import("./projects.interface").Project[];
    getProjectById(id: string): {
        studentIds: string[];
        id: string;
        projectType: ProjectType;
        facultyId: string;
        semesterStart: number;
        semesterEnd: number;
        status: "ACTIVE" | "COMPLETED";
    } | null;
    addMeeting(projectId: string, date: string, notes: string): import("./projects.interface").Meeting;
    getMeetings(projectId: string): import("./projects.interface").Meeting[];
}
