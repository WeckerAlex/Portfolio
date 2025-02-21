
import Portfolio from "./components/portfolio/portfolio";
import Experience, { ExperienceJSON } from '@/app/lib/database/models/experience';
import { Op } from 'sequelize';
import Project, { ProjectWithAllJSON } from '@/app/lib/database/models/project';
import Certificate from '@/app/lib/database/models/certificate';
import CertificateIssuer, { CertificateIssuerWithCertificatesJSON } from '@/app/lib/database/models/certificateissuer';

export default async function Home() {

  const experienceList = await Experience.findAll({
      where: {
        skill: {
          [Op.gte]: 50
        }
      },
      order: [['skill', 'DESC']]
    });
  const projectList = await Project.findAll({include: [{ all: true }]})
  const certificateList = await CertificateIssuer.findAll({ include: Certificate });
  
  const experienceListJSON: ExperienceJSON[] = experienceList.map(x => x.toJSON())
  const projectListJSON: ProjectWithAllJSON[] = projectList.map(x => x.toJSON())
  const certificateListJSON: CertificateIssuerWithCertificatesJSON[] = certificateList.map(x => x.toJSON())

  const data = {
    experience: experienceListJSON ,
    projects: projectListJSON,
    certificates: certificateListJSON
  }

  return (
    <Portfolio data={data} ></Portfolio>
  );
}

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'