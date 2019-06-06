'use strict';
const Person = require('./person.schema').Person;
const Role = require('./role.schema').Role;
const TechnologyStack = require('./technologystack.schema').TechnologyStack;
const sequelize = require('./sequalize.lib').sequelize;
/* * Person Has One Role *
 *  Person tbl --> id = PK | Contraints  -->  People_pkey PK
 *  Role tbl --> id =PK, PersonID = FK | Contraints  -->  Roles_pkey PK , Role_Person_fkey FK 
 */
Person.hasOne(Role, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Role.hasMany(TechnologyStack, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
var sqlConnections = async () => {
    return await new Promise((resolve, reject) => {
        sequelize.authenticate().then(() => {
            sequelize.sync({ force: false }).then(() => {
                Person.create({ firstname: 'first', lastname: 'last', age: 35 }).then((currentPerson) => {
                    console.log(`Person Creted Sucessfully!`);
                    Role.create({ PersonId: currentPerson.id, jobtitle: 'GC Edge Lead' }).then((currentPersonRole) => {
                        console.log(`Role Created Sucessfully!`);
                        TechnologyStack.create({
                            RoleId: currentPersonRole.id,
                            technologyStack: JSON.stringify(["Azure",
                                "Docker"
                            ])
                        }).then(() => {
                            console.log(`Technology Stack Creted Sucessfully!`);
                        }).catch((err) => {
                            console.log(`Error in saving Technology Stack Details ${err} `);
                        })
                    }).catch((err) => {
                        console.log(`Error in saving Role Details ${err} `);
                    })
                }).catch((err) => {
                    console.log(`Error in saving Person Details ${err} `);
                })
            })
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.dbModules = {
    Person: Person,
    Role: Role,
    TechnologyStack: TechnologyStack
}
module.exports.sqlConnections = sqlConnections;