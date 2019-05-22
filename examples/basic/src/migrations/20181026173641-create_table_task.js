const { migrationActions } = require('../../../../cjs');

module.exports = {
  up: migrationActions.createTable('Tasks', Sequelize => ({
    name: {
      type: Sequelize.STRING,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  })),
  down: migrationActions.dropTable('Tasks'),
};
