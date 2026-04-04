
import { ProjectType } from "src/common/enums/projectType.enum";
export class RegisterProjectDTO {
    projectType: ProjectType;
    facultyId: string;
    studentIds: string[];
    semesterStart: number;
}