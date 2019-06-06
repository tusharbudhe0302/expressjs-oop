'use strict';
const sequelizelib = require('./sequalize.lib');
const Role = sequelizelib.sequelize.define('Role', {
    id: {
        type: sequelizelib.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jobtitle: {
        type: sequelizelib.Sequelize.STRING,
        allowNull: false
    }
});
module.exports.Role = Role;

