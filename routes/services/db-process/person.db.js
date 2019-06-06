const personModule = require('./utils/postgresdb').dbModules;
var createPerson = async (personData) => {
    return new Promise((resolve, reject) => {
        personModule.Person.create(personData).then((newPerson) => {
            resolve(newPerson);
        }).catch((err) => {
            console.log(`Error While saving Person details`);
            reject(err);
        })
    })
}
var updatePersonById = async (personData, personId) => {
    return new Promise((resolve, reject) => {
        // console.log(`${personId}`);
        personModule.Person.findByPk(personId).then((existingPerson) => {
            // console.log(`existingPerson : ${JSON.stringify(existingPerson)}`);
            existingPerson.update({ firstname: personData.firstname, lastname: personData.lastname, age: personData.age }).then((newPerson) => {
                resolve(newPerson);
            }).catch((err) => {
                reject(err);
            })
        }).catch((err) => {
            reject(err);
        })
    })
}
var deletePersonById = async (personId) => {
    return new Promise((resolve, reject) => {
        personModule.Person.destroy({ where: { id: personId } }).then(() => {
            // console.log(`deletedPerson : ${deletedPerson}`);
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}
var getPersonById = async (personId) => {
    return new Promise((resolve, reject) => {
        personModule.Person.find({ where: { id: personId } }).then((existingPerson) => {
            resolve(existingPerson);
        }).catch((err) => {
            reject(err);
        })
    })
}
module.exports.Person = {
    createPerson: createPerson,
    updatePersonById: updatePersonById,
    getPersonById: getPersonById,
    deletePersonById: deletePersonById
}