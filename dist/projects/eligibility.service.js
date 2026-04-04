"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElibilityService = void 0;
const common_1 = require("@nestjs/common");
const project_repository_1 = require("./project.repository");
const projectType_enum_1 = require("../common/enums/projectType.enum");
let ElibilityService = class ElibilityService {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    validate(studentIds, type) {
        for (const studentId of studentIds) {
            const existingProjects = this.projectRepository.findProjectByStudent(studentId);
            const honorsCount = existingProjects.filter((project) => project.projectType === projectType_enum_1.ProjectType.HONORS).length;
            const btpCount = existingProjects.filter((project) => project.projectType === projectType_enum_1.ProjectType.BTP).length;
            const apCount = existingProjects.filter((project) => project.projectType === projectType_enum_1.ProjectType.AP).length;
            if (type === projectType_enum_1.ProjectType.HONORS && honorsCount >= 1) {
                throw new Error(`Student ${studentId} already registered for HONORS`);
            }
            if (type === projectType_enum_1.ProjectType.BTP && btpCount >= 1) {
                throw new Error(`Student ${studentId} already registered for BTP`);
            }
            if (type === projectType_enum_1.ProjectType.AP && apCount >= 2) {
                throw new Error(`Student ${studentId} already registered for AP twice`);
            }
            if (type === projectType_enum_1.ProjectType.HONORS && btpCount >= 1) {
                throw new Error(`Student ${studentId} already has BTP, cannot register for HONORS`);
            }
            if (type === projectType_enum_1.ProjectType.BTP && honorsCount >= 1) {
                throw new Error(`Student ${studentId} already has HONORS, cannot register for BTP`);
            }
        }
    }
};
exports.ElibilityService = ElibilityService;
exports.ElibilityService = ElibilityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [project_repository_1.ProjectRepository])
], ElibilityService);
//# sourceMappingURL=eligibility.service.js.map