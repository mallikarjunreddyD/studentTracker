import { ProjectRepository } from './project.repository';
import { ProjectType } from 'src/common/enums/projectType.enum';
export declare class ElibilityService {
    private readonly projectRepository;
    constructor(projectRepository: ProjectRepository);
    validate(studentIds: string[], type: ProjectType): void;
}
