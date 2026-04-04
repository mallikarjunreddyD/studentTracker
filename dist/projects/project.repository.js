"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const crypto_1 = require("crypto");
class ProjectRepository {
    projects = [];
    projectMembers = [];
    meetings = [];
    createProject(project) {
        const newProject = {
            id: (0, crypto_1.randomUUID)(),
            ...project,
        };
        this.projects.push(newProject);
        return newProject;
    }
    addMembers(projectId, studentIds) {
        const members = studentIds.map((studentId) => ({
            projectId,
            studentId,
        }));
        this.projectMembers.push(...members);
    }
    findAll() {
        return this.projects;
    }
    findById(projectId) {
        return this.projects.find((project) => project.id === projectId) || null;
    }
    findMembers(projectId) {
        return this.projectMembers
            .filter((projectMember) => projectMember.projectId === projectId)
            .map((projectMember) => projectMember.studentId);
    }
    findProjectByStudent(studentId) {
        const projectIds = this.projectMembers
            .filter((projectMember) => projectMember.studentId === studentId)
            .map((projectMember) => projectMember.projectId);
        return this.projects.filter((p) => projectIds.includes(p.id));
    }
    findProjectsByFaculty(facultyId) {
        return this.projects.filter((p) => p.facultyId === facultyId);
    }
    addMeeting(projectId, date, notes) {
        const meeting = {
            id: (0, crypto_1.randomUUID)(),
            projectId,
            date,
            notes,
        };
        this.meetings.push(meeting);
        return meeting;
    }
    getMeetingsByProject(projectId) {
        return this.meetings.filter((m) => m.projectId === projectId);
    }
}
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=project.repository.js.map