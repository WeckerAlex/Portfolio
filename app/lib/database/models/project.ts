import { Association, CreationOptional, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import sequelize from '../db';
import Job, { ProjectJSONWithProjectjob } from './job';
import Link, { LinkJSON } from './link';
import Projectjob from './projectjob';
import TechExperience, { TechExperienceJSON } from './techexperience';

class Project extends Model<InferAttributes<Project>, InferCreationAttributes<Project>> {
    declare id: CreationOptional<number>
    declare title: string
    declare name: string
    declare image: string
    declare description: string

    declare getJobs: HasManyGetAssociationsMixin<Job>; // Note the null assertions!
    declare addJob: HasManyAddAssociationMixin<Job, number>;
    declare addJobs: HasManyAddAssociationsMixin<Job, number>;
    declare setJobs: HasManySetAssociationsMixin<Job, number>;
    declare removeJob: HasManyRemoveAssociationMixin<Job, number>;
    declare removeJobs: HasManyRemoveAssociationsMixin<Job, number>;
    declare hasJob: HasManyHasAssociationMixin<Job, number>;
    declare hasJobs: HasManyHasAssociationsMixin<Job, number>;
    declare countJobs: HasManyCountAssociationsMixin;
    declare createJob: HasManyCreateAssociationMixin<Job>;

    declare getLinks: HasManyGetAssociationsMixin<Link>; // Note the null assertions!
    declare addLink: HasManyAddAssociationMixin<Link, number>;
    declare addLinks: HasManyAddAssociationsMixin<Link, number>;
    declare setLinks: HasManySetAssociationsMixin<Link, number>;
    declare removeLink: HasManyRemoveAssociationMixin<Link, number>;
    declare removeLinks: HasManyRemoveAssociationsMixin<Link, number>;
    declare hasLink: HasManyHasAssociationMixin<Link, number>;
    declare hasLinks: HasManyHasAssociationsMixin<Link, number>;
    declare countLinks: HasManyCountAssociationsMixin;
    declare createLink: HasManyCreateAssociationMixin<Link>;

    declare getExperiences: HasManyGetAssociationsMixin<TechExperience>; // Note the null assertions!
    declare addExperience: HasManyAddAssociationMixin<TechExperience, number>;
    declare addExperiences: HasManyAddAssociationsMixin<TechExperience, number>;
    declare setExperiences: HasManySetAssociationsMixin<TechExperience, number>;
    declare removeExperience: HasManyRemoveAssociationMixin<TechExperience, number>;
    declare removeExperiences: HasManyRemoveAssociationsMixin<TechExperience, number>;
    declare hasExperience: HasManyHasAssociationMixin<TechExperience, number>;
    declare hasExperiences: HasManyHasAssociationsMixin<TechExperience, number>;
    declare countExperiences: HasManyCountAssociationsMixin;
    declare createExperience: HasManyCreateAssociationMixin<TechExperience>;

    declare jobs?: NonAttribute<Job[]>
    declare links?: NonAttribute<Link[]>
    declare experiences?: NonAttribute<TechExperience[]>

    declare static associations: {
        jobs: Association<Project, Job>;
        links: Association<Project, Link>;
        experiences: Association<Project, TechExperience>;
    };
}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Project', // We need to choose the model name
        timestamps: false
    },
);

Project.belongsToMany(Job, {
    through: Projectjob,
    as: 'jobs'
});
Job.belongsToMany(Project, {
    through: Projectjob
});

Project.belongsToMany(Link, {
    through: 'Projectlinks',
    as: 'links',
    timestamps: false
});
Link.belongsToMany(Project, {
    through: 'Projectlinks',
    timestamps: false
});

Project.belongsToMany(TechExperience, {
    through: 'Projectexperiences',
    as: 'experiences',
    timestamps: false
});
TechExperience.belongsToMany(Project, {
    through: 'Projectexperiences',
    timestamps: false
});


export interface ProjectJSON {
    id: number,
    title: string
    name: string
    image: string
    description: string
}

export interface ProjectWithAllJSON extends ProjectJSON {
    jobs: ProjectJSONWithProjectjob[]
    links: LinkJSON[]
    experiences: TechExperienceJSON[]
}

export default Project