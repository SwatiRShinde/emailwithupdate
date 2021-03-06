module.exports = (sequelize, Sequelize) => {
  const Status = sequelize.define(
    "state",
    {
      statusId: {
        field: "statusId",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      answer: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "userId",
        references: {
          model: "users",
          key: "userId",
        },
      },
      questionId: {
        type: Sequelize.INTEGER,
        field: "questionId",
        references: {
          model: "questionarie",
          key: "questionId",
        },
      },
      quizId: {
        type: Sequelize.INTEGER,
        field: "quizId",
        references: {
          model: "quiz",
          key: "quizId",
        },
      },
      reamainingTime: {
        type: Sequelize.INTEGER,
        field: "reamainingTime",
      },
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
      underscored: true,
    }
  );

  return Status;
};
