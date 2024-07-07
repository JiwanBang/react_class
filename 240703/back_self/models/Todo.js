import { Model, DataTypes } from "sequelize";

export default class Todo extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        priority: {
          type: DataTypes.INTEGER.UNSIGNED,
          defaultValue: "0",
        },
        limit: {
          type: DataTypes.DATE,
        },
        isComplete: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: "Todo",
        tableName: "todo",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
