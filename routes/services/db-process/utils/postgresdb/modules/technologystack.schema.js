'use strict';
const sequelizelib = require('./sequalize.lib');

var TechnologyStack = sequelizelib.sequelize.define('TechnologyStack', {
    id: {
        type: sequelizelib.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    technologyStack: {
        type: sequelizelib.Sequelize.JSONB,
        allowNull: true
    }
});

module.exports.TechnologyStack = TechnologyStack;