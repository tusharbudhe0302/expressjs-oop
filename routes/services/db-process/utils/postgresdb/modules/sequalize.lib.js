'use strict';
const Sequelize = require('sequelize');
var config = require('../../../../../../app.config').appConfig.postgresdbConfig;
var sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, config.database.options);
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;