import { describe, expect, test } from '@jest/globals';
import Experience from './models/experience';
import Project from './models/project';
import Job from './models/job';
import Link from './models/link';
import sequelize from './db';

describe('DB', () => {
    test('DB connection', async () => {
        await sequelize.authenticate();
    });

    let exp: Experience
    let job: Job
    let lnk: Link
    let pro: Project

    describe('Create', () => {

        test('Experience', async () => {
            exp = await Experience.create({
                name: "Test",
                image: "Test",
                skill: 80
            });
        });

        test('Job', async () => {
            job = await Job.create({
                title: "Test"
            });
        });

        test('Link', async () => {
            lnk = await Link.create({
                title: "linktitle",
                link: "https://sequelize.org/"
            });
        });

        test('Project', async () => {
            pro = await Project.create({
                title: "Test",
                name: "Test",
                image: "Test",
                description: "Testdescription"
            });
        });
    })

    describe('Update', () => {

        const expnewname = "expnewname"
        const jobnewttle = "jobnewttle"
        const lnknewttle = "lnknewttle"
        const pronewname = "pronewname"

        test('Experience', async () => {
            exp.name = expnewname;
            await exp.save();
            exp.name = "";
            await exp.reload();
            expect(exp.name).toBe(expnewname);
        });

        test('Job', async () => {
            job.title = jobnewttle;
            await job.save();
            job.title = "";
            await job.reload();
            expect(job.title).toBe(jobnewttle);
        });

        test('Link', async () => {
            lnk.title = lnknewttle;
            await lnk.save();
            lnk.title = "";
            await lnk.reload();
            expect(lnk.title).toBe(lnknewttle);
        });

        test('Project', async () => {
            pro.name = pronewname;
            await pro.save();
            pro.name = "";
            await pro.reload();
            expect(pro.name).toBe(pronewname);
        });

        test('Project(jobs)', async () => {
            await pro.addJob(job)
            const project = await Project.findByPk(pro.id,{
                include: 'jobs'
            });
            expect(project?.jobs).toHaveLength(1)
        });

        test('Project(links)', async () => {
            await pro.addLink(lnk)
            const project = await Project.findByPk(pro.id, {
                include: 'links'
            });
            expect(project?.links).toHaveLength(1)
        });

        test('Project(experiences)', async () => {
            await pro.addExperience(exp)
            const project = await Project.findByPk(pro.id, {
                include: 'experiences'
            });
            expect(project?.experiences).toHaveLength(1)
        });
    })

    describe('Delete', () => {

        test('Experience', async () => {
            const id = exp.id; 
            await exp.destroy()
            const res = await Experience.findByPk(id);
            expect(res).toBeNull();
        });

        test('Job', async () => {
            const id = job.id; 
            await job.destroy()
            const res = await Job.findByPk(id);
            expect(res).toBeNull();
        });

        test('Link', async () => {
            const id = lnk.id; 
            await lnk.destroy();
            const res = await Link.findByPk(id);
            expect(res).toBeNull();
        });

        test('Project', async () => {
            const id = pro.id; 
            await pro.destroy()
            const res = await Project.findByPk(id);
            expect(res).toBeNull();
        });

    })
})