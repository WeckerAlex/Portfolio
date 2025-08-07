import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';

class TechExperience extends Model<InferAttributes<TechExperience>, InferCreationAttributes<TechExperience>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare image: string;
    declare skill: number;
}

TechExperience.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        skill: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
            defaultValue: 50
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'TechExperience', // We need to choose the model name
        timestamps: false
    },
);

export interface TechExperienceJSON {
    id: number,
    name: string,
    image: string,
    skill: number,
}

export default TechExperience