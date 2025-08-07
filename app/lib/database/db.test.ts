import { describe, expect, test } from '@jest/globals';
import TechExperience from './models/techexperience';
import Project from './models/project';
import Job from './models/job';
import Link from './models/link';
import CertificateIssuer from './models/certificateissuer';
import Certificate from './models/certificate';
import ProfExperience from './models/profexperience';
import sequelize from './db';

describe('DB', () => {
    test('DB connection', async () => {
        await sequelize.authenticate();
    });

    let exp: TechExperience
    let job: Job
    let lnk: Link
    let pro: Project
    let cer: Certificate
    let ceI: CertificateIssuer
    let pex: ProfExperience

    describe('Create', () => {

        test('Experience', async () => {
            exp = await TechExperience.create({
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

        test('CertificateIssuer', async () => {
            ceI = await CertificateIssuer.create({
                name: "Test",
            });
        });

        test('Certificate', async () => {
            cer = await Certificate.create({
                name: "Test",
                image: "Test"
            });
        });

        test('ProfExperience', async () => {
            pex = await ProfExperience.create({
                title: "Test",
                timerange: "Test"
            });
        });

    })

    describe('Update', () => {

        const expnewname = "expnewname"
        const jobnewttle = "jobnewttle"
        const lnknewttle = "lnknewttle"
        const pronewname = "pronewname"
        const cernewname = "cernewname"
        const ceInewname = "ceinewname"
        const pexnewttle = "pexnewttle"
        const pexnewanno = ["anno1","anno2"]
        
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
            console.log(Project.prototype);
            
            pro.name = pronewname;
            await pro.save();
            pro.name = "";
            await pro.reload();
            expect(pro.name).toBe(pronewname);
        });

        test('Project(jobs)', async () => {
            await pro.addJob(job)
            const project = await Project.findByPk(pro.id, {
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

        test('CertificateIssuer', async () => {
            cer.name = ceInewname;
            await cer.save();
            cer.name = "";
            await cer.reload();
            expect(cer.name).toBe(ceInewname);
        });

        test('Certificate', async () => {
            cer.name = cernewname;
            await cer.save();
            cer.name = "";
            await cer.reload();
            expect(cer.name).toBe(cernewname);
        });

        test('Certificate(issuer)', async () => {
            await cer.setCertificateIssuer(ceI)
            const certificate = await Certificate.findByPk(cer.id, {
                include: 'CertificateIssuer'
            });
            expect((await certificate?.getCertificateIssuer())?.id).toBe(ceI.id)
        });

        test('ProfExperience(title)', async () => {
            pex.title = pexnewttle;
            await pex.save();
            pex.title = "";
            await pex.reload();
            expect(pex.title).toBe(pexnewttle);
        });

        test('ProfExperience(annotations)', async () => {
            pex.annotations = pexnewanno;
            await pex.save();
            pex.annotations = [];
            await pex.reload();
            expect(pex.annotations).toContain(pexnewanno[0]);
        });
    })

    describe('Delete', () => {

        test('Experience', async () => {
            const id = exp.id;
            await exp.destroy()
            const res = await TechExperience.findByPk(id);
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

        test('CertificateIssuer', async () => {
            const id = ceI.id;
            await ceI.destroy()
            const res = await CertificateIssuer.findByPk(id);
            expect(res).toBeNull();
        });

        test('Certificate', async () => {
            const id = cer.id;
            await cer.destroy()
            const res = await Certificate.findByPk(id);
            expect(res).toBeNull();
        });

        test('ProfExperience', async () => {
            const id = pex.id;
            await pex.destroy()
            const res = await ProfExperience.findByPk(id);
            expect(res).toBeNull();
        });

    })
})