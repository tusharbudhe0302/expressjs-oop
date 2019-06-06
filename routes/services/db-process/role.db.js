const roleModule = require('./utils/postgresdb').dbModules;
var createRoleForPerson = async (roleData, personId) => {
    return new Promise((resolve, reject) => {
        roleModule.Person.findByPk(personId).then((isAlreadyExist) => {
            if (!isAlreadyExist) {
                reject({ data: null, Message: `Person not exist.Please Create Person First` });
            } else {
                roleModule.Role.create(roleData).then((newRole) => {
                    resolve(newRole);
                }).catch((err) => {
                    console.log(`Error While saving Role details`);
                    reject(err);
                })
            }
        })
    })
}
// var updateRoleById = async (roleData, roleId) => {
//     return new Promise((resolve, reject) => {
//         // console.log(`${RoleId}`);
//         roleModule.Role.findByPk(roleId).then((existingRole) => {
//             // console.log(`existingRole : ${JSON.stringify(existingRole)}`);
//             existingRole.update({ firstname: roleData.firstname, lastname: roleData.lastname, age: roleData.age }).then((newRole) => {
//                 resolve(newRole);
//             }).catch((err) => {
//                 reject(err);
//             })
//         }).catch((err) => {
//             reject(err);
//         })
//     })
// }
// var deleteRoleById = async (RoleId) => {
//     return new Promise((resolve, reject) => {
//         roleModule.Role.destroy({ where: { id: RoleId } }).then(() => {
//             // console.log(`deletedRole : ${deletedRole}`);
//             resolve();
//         }).catch((err) => {
//             reject(err);
//         })
//     })
// }
// var getRoleById = async (RoleId) => {
//     return new Promise((resolve, reject) => {
//         roleModule.Role.find({ where: { id: RoleId } }).then((existingRole) => {
//             resolve(existingRole);
//         }).catch((err) => {
//             reject(err);
//         })
//     })
// }
module.exports.Role = {
    createRoleForPerson: createRoleForPerson
    // updateRoleById: updateRoleById,
    // getRoleById: getRoleById,
    // deleteRoleById: deleteRoleById
}