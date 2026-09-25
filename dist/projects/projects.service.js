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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const project_repository_1 = require("./project.repository");
const users_service_1 = require("../users/users.service");
const projectType_enum_1 = require("../common/enums/projectType.enum");
const eligibility_service_1 = require("./eligibility.service");
let ProjectsService = class ProjectsService {
    projectRepository;
    userService;
    eligibilityService;
    constructor(projectRepository, userService, eligibilityService) {
        this.projectRepository = projectRepository;
        this.userService = userService;
        this.eligibilityService = eligibilityService;
    }
    registerProject(registerProjectDTO) {
        const { projectType, facultyId, studentIds, semesterStart } = registerProjectDTO;
        const faculty = this.userService.findOne(facultyId);
        console.log(faculty);
        if (!faculty || faculty.role != 'FACULTY') {
            throw new Error('invalid faculty');
        }
        let duration = 1;
        if (projectType === projectType_enum_1.ProjectType.HONORS)
            duration = 4;
        if (projectType === projectType_enum_1.ProjectType.BTP)
            duration = 2;
        if (projectType === projectType_enum_1.ProjectType.AP)
            duration = 1;
        const semesterEnd = semesterStart + duration - 1;
        this.eligibilityService.validate(studentIds, projectType);
        const project = this.projectRepository.createProject({
            projectType,
            facultyId,
            semesterStart,
            semesterEnd,
            status: 'ACTIVE',
        });
        this.projectRepository.addMembers(project.id, studentIds);
        return project;
    }
    getProjects(filter) {
        if (filter?.studentId) {
            return this.projectRepository.findProjectByStudent(filter.studentId);
        }
        if (filter?.facultyId) {
            return this.projectRepository.findProjectsByFaculty(filter.facultyId);
        }
        return this.projectRepository.findAll();
    }
    getProjectById(id) {
        const project = this.projectRepository.findById(id);
        if (!project) {
            return null;
        }
        const members = this.projectRepository.findMembers(id);
        return {
            ...project,
            studentIds: members,
        };
    }
    addMeeting(projectId, date, notes) {
        const project = this.projectRepository.findById(projectId);
        if (!project) {
            throw new Error('Project not found');
        }
        return this.projectRepository.addMeeting(projectId, date, notes);
    }
    getMeetings(projectId) {
        const project = this.projectRepository.findById(projectId);
        if (!project) {
            throw new Error('Project not found');
        }
        return this.projectRepository.getMeetingsByProject(projectId);
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [project_repository_1.ProjectRepository,
        users_service_1.UsersService,
        eligibility_service_1.ElibilityService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map