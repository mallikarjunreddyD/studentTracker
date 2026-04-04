import { ProjectType } from "src/common/enums/projectType.enum";
export declare class RegisterProjectDTO {
    projectType: ProjectType;
    facultyId: string;
    studentIds: string[];
    semesterStart: number;
}
