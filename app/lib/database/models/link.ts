import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';

class Link extends Model<InferAttributes<Link>, InferCreationAttributes<Link>> {
    declare id: CreationOptional<number>
    declare title: string
    declare link: string
}

Link.init(
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
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Link', // We need to choose the model name
        timestamps: false
    },
);

export default Link