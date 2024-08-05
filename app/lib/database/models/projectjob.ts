import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';

class Projectjob extends Model<InferAttributes<Projectjob>, InferCreationAttributes<Projectjob>> {
    declare count: number
}

Projectjob.init(
    {
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Projectjob', // We need to choose the model name
        timestamps: false
    },
);

export default Projectjob