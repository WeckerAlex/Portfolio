import { CreationOptional, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';
import CertificateIssuer from './certificateissuer';

class Certificate extends Model<InferAttributes<Certificate>, InferCreationAttributes<Certificate>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare image: string;

    declare getCertificateIssuer: HasOneGetAssociationMixin<CertificateIssuer>; // Note the null assertions!
    declare setCertificateIssuer: HasOneSetAssociationMixin<CertificateIssuer, number>;
    declare createCertificateIssuer: HasOneCreateAssociationMixin<CertificateIssuer>;

}

Certificate.init(
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
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Certificate', // We need to choose the model name
        timestamps: false
    },
);

Certificate.belongsTo(CertificateIssuer);
CertificateIssuer.hasMany(Certificate);

export default Certificate