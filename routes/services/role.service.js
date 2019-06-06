const Role = require('./db-process/Role.db').Role;

const createRoleForPersonService = async (newRole,personId) => {
        return new Promise((resolve, reject) => {
                Role.createRoleForPerson(newRole,personId).then((createRoleServiceResponse) => {
                        resolve(createRoleServiceResponse);
                }).catch((err) => {
                        reject(err);
                })
        })
}
const updateRoleService = async (newRole, RoleId) => {
        // console.log(`Role Id Services : ${RoleId}`);
        return new Promise((resolve, reject) => {
                Role.updateRoleById(newRole, RoleId).then((updatedRoleServiceResponse) => {
                        resolve(updatedRoleServiceResponse);
                }).catch((err) => {
                        reject(err);
                })
        })
}
const deleteRoleService = async (RoleId) => {
        console.log(`RoleId delete Role service ${RoleId}`);
        return new Promise((resolve, reject) => {
                Role.deleteRoleById(RoleId).then(() => {
                        resolve();
                }).catch((err) => {
                        reject(err);
                })
        })
}
const findRoleByIdService = async (RoleId) => {
        return new Promise((resolve, reject) => {
                Role.getRoleById((RoleId)).then((exsitingRoleServiceResponse) => {
                        resolve(exsitingRoleServiceResponse);
                }).catch((err) => {
                        reject(err);
                })
        })
}

module.exports.roleService = {
        createRoleForPersonService: createRoleForPersonService,
        findRoleByIdService: findRoleByIdService,
        deleteRoleService: deleteRoleService,
        updateRoleService: updateRoleService
}

