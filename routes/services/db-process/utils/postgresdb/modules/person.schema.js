'use strict';
const sequelizelib = require('./sequalize.lib');
var Person = sequelizelib.sequelize.define('Person', {
    id: {
        type: sequelizelib.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstname: {
        type: sequelizelib.Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: sequelizelib.Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: sequelizelib.Sequelize.SMALLINT,
        allowNull: false,
    },
});
module.exports.Person = Person;
