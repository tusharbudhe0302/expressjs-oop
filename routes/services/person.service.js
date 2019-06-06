const person = require('./db-process/person.db').Person;

const createPersonService = async (newPerson) => {
        return new Promise((resolve, reject) => {
                person.createPerson(newPerson).then((createPersonServiceResponse) => {
                        resolve(createPersonServiceResponse);
                }).catch((err) => {
                        reject(err);
                })
        })
}
const updatePersonService = async (newPerson, personId) => {
        // console.log(`Person Id Services : ${personId}`);
        return new Promise((resolve, reject) => {
                person.updatePersonById(newPerson, personId).then((updatedPersonServiceResponse) => {
                        resolve(updatedPersonServiceResponse);
                }).catch((err) => {
                        reject(err);
                })
        })
}
const deletePersonService = async (personId) => {
        console.log(`personId delete Person service ${personId}`);
        return new Promise((resolve, reject) => {
                person.deletePersonById(personId).then(() => {
                        resolve();
                }).catch((err) => {
                        reject(err);
                })
        })
}
const findPersonByIdService = async (personId) => {
        return new Promise((resolve, reject) => {
                person.getPersonById((personId)).then((exsitingPersonServiceResponse) => {
                        resolve(exsitingPersonServiceResponse);
                }).catch((err) => {
                        reject(err);
                })
        })
}

module.exports.personService = {
        createPersonService: createPersonService,
        findPersonByIdService: findPersonByIdService,
        deletePersonService: deletePersonService,
        updatePersonService: updatePersonService
}

