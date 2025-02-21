import { CreationOptional, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db';
import Certificate, { CertificateJSON } from './certificate';

class CertificateIssuer extends Model<InferAttributes<CertificateIssuer>, InferCreationAttributes<CertificateIssuer>> {
    declare id: CreationOptional<number>;
    declare name: string;

    declare getCertificates: HasManyGetAssociationsMixin<Certificate>; // Note the null assertions!
    declare addCertificate: HasManyAddAssociationMixin<Certificate, number>;
    declare addCertificates: HasManyAddAssociationsMixin<Certificate, number>;
    declare setCertificates: HasManySetAssociationsMixin<Certificate, number>;
    declare removeCertificate: HasManyRemoveAssociationMixin<Certificate, number>;
    declare removeCertificates: HasManyRemoveAssociationsMixin<Certificate, number>;
    declare hasCertificate: HasManyHasAssociationMixin<Certificate, number>;
    declare hasCertificates: HasManyHasAssociationsMixin<Certificate, number>;
    declare countCertificates: HasManyCountAssociationsMixin;
    declare createCertificate: HasManyCreateAssociationMixin<Certificate>;
}

CertificateIssuer.init(
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
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'CertificateIssuer', // We need to choose the model name
        timestamps: false
    },
);

export interface CertificateIssuerJSON {
    id: number,
    name: string
}

export interface CertificateIssuerWithCertificatesJSON extends CertificateIssuerJSON {
    Certificates: CertificateJSON[]
}

export default CertificateIssuer