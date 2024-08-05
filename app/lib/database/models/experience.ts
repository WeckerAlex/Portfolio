import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';

class Experience extends Model<InferAttributes<Experience>, InferCreationAttributes<Experience>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare image: string;
    declare skill: number;
}

Experience.init(
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
        modelName: 'Experience', // We need to choose the model name
        timestamps: false
    },
);

export default Experience