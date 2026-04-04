import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { validateHeaderName } from 'http';
import { ProjectType } from 'src/common/enums/projectType.enum';
@Injectable()
export class ElibilityService {
  constructor(private readonly projectRepository: ProjectRepository) {}
  validate(studentIds: string[], type: ProjectType): void {
    for (const studentId of studentIds) {
      const existingProjects =
        this.projectRepository.findProjectByStudent(studentId);

      const honorsCount = existingProjects.filter(
        (project) => project.projectType === ProjectType.HONORS,
      ).length;

      const btpCount = existingProjects.filter(
        (project) => project.projectType === ProjectType.BTP,
      ).length;

      const apCount = existingProjects.filter(
        (project) => project.projectType === ProjectType.AP,
      ).length;

      if (type === ProjectType.HONORS && honorsCount >= 1) {
        throw new Error(`Student ${studentId} already registered for HONORS`);
      }
      if (type === ProjectType.BTP && btpCount >= 1) {
        throw new Error(`Student ${studentId} already registered for BTP`);
      }
      if (type === ProjectType.AP && apCount >= 2) {
        throw new Error(`Student ${studentId} already registered for AP twice`);
      }
      if (type === ProjectType.HONORS && btpCount >= 1) {
        throw new Error(
          `Student ${studentId} already has BTP, cannot register for HONORS`,
        );
      }

      if (type === ProjectType.BTP && honorsCount >= 1) {
        throw new Error(
          `Student ${studentId} already has HONORS, cannot register for BTP`,
        );
      }
    }
  }
}
