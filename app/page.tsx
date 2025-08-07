
import Portfolio from "./components/portfolio/portfolio";
import TechExperience, { TechExperienceJSON } from '@/app/lib/database/models/techexperience';
import ProfExperience, { ProfExperienceJSON } from "@/app/lib/database/models/profexperience";
import { Op } from 'sequelize';
import Project, { ProjectWithAllJSON } from '@/app/lib/database/models/project';
import Certificate from '@/app/lib/database/models/certificate';
import CertificateIssuer, { CertificateIssuerWithCertificatesJSON } from '@/app/lib/database/models/certificateissuer';

export default async function Home() {

  const techExperienceList = await TechExperience.findAll({
    where: {
      skill: {
        [Op.gte]: 50
      }
    },
    order: [['skill', 'DESC']]
  });
  const profExperienceList = await ProfExperience.findAll()
  const projectList = await Project.findAll({ include: [{ all: true }] })
  const certificateList = await CertificateIssuer.findAll({ include: Certificate });

  const techExperienceListJSON: TechExperienceJSON[] = techExperienceList.map(x => x.toJSON())
  const profExperienceListJSON: ProfExperienceJSON[] = profExperienceList.map(x => x.toJSON())
  const projectListJSON: ProjectWithAllJSON[] = projectList.map(x => x.toJSON())
  const certificateListJSON: CertificateIssuerWithCertificatesJSON[] = certificateList.map(x => x.toJSON())
  const experienceJSON = {
    tech: techExperienceListJSON,
    prof: profExperienceListJSON
  }
  const data = {
    experience: experienceJSON,
    projects: projectListJSON,
    certificates: certificateListJSON
  }

  return (
    <Portfolio data={data} ></Portfolio>
  );
}

export const revalidate = 3600 // revalidate the data at most every hour
export const dynamic = 'force-dynamic'