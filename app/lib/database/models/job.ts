import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';
import { ProjectJSON } from './project';
import { ProjectJobJSON } from './projectjob';

class Job extends Model<InferAttributes<Job>, InferCreationAttributes<Job>> {
    declare id: CreationOptional<number>
    declare title: string
}

Job.init(
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
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Job', // We need to choose the model name
        timestamps: false
    },
);

export interface JobJSON {
    id: number,
    title: string
}

export interface ProjectJSONWithProjectjob extends ProjectJSON{
    Projectjob: ProjectJobJSON
}

export interface JobWithProjectsJSON extends JobJSON {
    Projects: ProjectJSONWithProjectjob[]
}

export default Job