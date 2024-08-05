import { Association, CreationOptional, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import sequelize from '../db';
import Job from './job';
import Link from './link';
import Projectjob from './projectjob';
import Experience from './experience';

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

    declare getExperiences: HasManyGetAssociationsMixin<Experience>; // Note the null assertions!
    declare addExperience: HasManyAddAssociationMixin<Experience, number>;
    declare addExperiences: HasManyAddAssociationsMixin<Experience, number>;
    declare setExperiences: HasManySetAssociationsMixin<Experience, number>;
    declare removeExperience: HasManyRemoveAssociationMixin<Experience, number>;
    declare removeExperiences: HasManyRemoveAssociationsMixin<Experience, number>;
    declare hasExperience: HasManyHasAssociationMixin<Experience, number>;
    declare hasExperiences: HasManyHasAssociationsMixin<Experience, number>;
    declare countExperiences: HasManyCountAssociationsMixin;
    declare createExperience: HasManyCreateAssociationMixin<Experience>;

    declare jobs?: NonAttribute<Job[]>
    declare links?: NonAttribute<Link[]>
    declare experiences?: NonAttribute<Experience[]>

    declare static associations: {
        jobs: Association<Project, Job>;
        links: Association<Project, Link>;
        experiences: Association<Project, Experience>;
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

Project.belongsToMany(Experience, {
    through: 'Projectexperiences',
    as: 'experiences',
    timestamps: false
});
Experience.belongsToMany(Project, {
    through: 'Projectexperiences',
    timestamps: false
});

export default Project