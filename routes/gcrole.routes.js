const validator = require('./request-review/joi').validation;
const roleServices = require('./services/role.service').roleService;
const error = require('./error-code');
module.exports.role = (routes) => {
    routes.get('/:id/:personid', (req, res, next) => {
        const id = req.params.id;
        const personid = req.params.personid;
        if (id && personid) {
            roleServices.findroleByIdService(id).then((exstingrole) => {
                res.status(200).send({ data: exstingrole, message: `Sucessfully Find record.` });
            }).catch((err) => {
                res.status(500).send(error.internalServerError(err, 'Createrole'));
            });
        } else {
            res.status(400).send({ error: 'ID Not found', Message: 'RoleId & PersonId Need to get data' });
        }
    });
    routes.use((req, res, next) => {
        console.log('Role Middlware route get called!');
        const isValidRequest = validator.isValidRole(req.body);
        if (isValidRequest.error) {
            res.status(400).send(isValidRequest.error);
        } else {
            next();
        }
    });
    routes.put('/:id/:personid', (req, res, next) => {
        const id = req.params.id;
        const personid = req.params.personid;
        const requestrole = req.body;
        if (id > 0) {
            //   console.log(`role Id Routes : ${id}`);
            roleServices.updateroleService(requestrole, id).then((currentrole) => {
                res.status(200).send({ data: currentrole, message: `Sucessfully Update record.` });
            }).catch((err) => {
                res.status(500).send(error.internalServerError(err, 'Createrole'));
            });
        } else {
            res.status(400).send({ error: 'ID Not found', Message: 'role Id Need to update data' });
        }

    });
    routes.post('/:personid', async (req, res, next) => {
        const personId = req.params.personid;
        console.log(`Person Id in Role Route : ${personId}`)
        const requestrole = req.body;
        roleServices.createRoleForPersonService(requestrole, personId).then((currentrole) => {
            res.status(201).send({ data: currentrole, message: `Sucessfully created record.` });
            // res.status(201).send();
        }).catch((err) => {
            res.status(500).send(error.internalServerError(err, 'Createrole'));
        });
    });
    routes.delete('/:id/:personid', (req, res, next) => {
        const id = req.params.id;
        const personid = req.params.personid;
        if (id > 0 && personid > 0) {
            roleServices.deleteroleService(id).then(() => {
                res.status(200).send({ data: null, message: `Sucessfully delted records for Id : ${id}` });
            }).catch((err) => {
                res.status(500).send(error.internalServerError(err, 'Createrole'));
            });
        } else {
            res.status(400).send({ error: 'ID Not found', Message: 'role Id Need to delete data' });
        }
    });
    return routes;
}