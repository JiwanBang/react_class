import { Model, DataTypes } from "sequelize";

export default class Apitest extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.STRING(100),
        },
        password: {
          type: DataTypes.STRING(100),
        },
        location: {
          type: DataTypes.STRING(100),
        },
      },
      {
        sequelize,
        modelName: "Apitest",
        tableName: "apitest",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
