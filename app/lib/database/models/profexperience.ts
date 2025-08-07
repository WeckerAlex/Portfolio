import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';

class ProfExperience extends Model<InferAttributes<ProfExperience>, InferCreationAttributes<ProfExperience>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare timerange: string;
    declare annotations: CreationOptional<string[]>;
}

const splitValue = ";;;"
ProfExperience.init(
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
        timerange: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        annotations: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: null,
            get() {
                const rawValue = this.getDataValue('annotations');
                //@ts-expect-error
                return rawValue ? rawValue.split(splitValue) : [];
            },
            set(value: string[]) {
                const joinedValue = value.join(splitValue);
                //@ts-expect-error
                this.setDataValue('annotations', joinedValue);
            },
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'ProfExperience', // We need to choose the model name
        timestamps: false
    },
);

export interface ProfExperienceJSON {
    id: number,
    title: string,
    timerange: string,
    annotations?: string[],
}

export default ProfExperience