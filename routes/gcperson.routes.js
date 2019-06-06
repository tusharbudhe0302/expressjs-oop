const validator = require('./request-review/joi').validation;
const personServices = require('./services/person.service').personService;
const error = require('./error-code');
module.exports.users = (routes) => {
    routes.get('/:id', (req, res, next) => {
        var id = req.params.id;
        if (id) {
            personServices.findPersonByIdService(id).then((exstingPerson) => {
                res.status(200).send({ data: exstingPerson, message: `Sucessfully Find record.` });
            }).catch((err) => {
                res.status(500).send(error.internalServerError(err, 'CreatePerson'));
            });
        } else {
            res.status(400).send({ error: 'ID Not found', Message: 'Person Id Need to get data' });
        }
    });
    routes.use((req, res, next) => {
        console.log('User Middlware route get called!');
        if (isValidRequest.error) {
            res.status(400).send(isValidRequest.error);
        } else {
            next();
        }
    })
    routes.put('/:id', (req, res, next) => {
        var id = req.params.id;
        const requestPerson = req.body;
        if (id > 0) {
            //   console.log(`Person Id Routes : ${id}`);
            personServices.updatePersonService(requestPerson, id).then((currentPerson) => {
                res.status(200).send({ data: currentPerson, message: `Sucessfully Update record.` });
            }).catch((err) => {
                res.status(500).send(error.internalServerError(err, 'CreatePerson'));
            });
        } else {
            res.status(400).send({ error: 'ID Not found', Message: 'Person Id Need to update data' });
        }
    });
    routes.post('/', async (req, res, next) => {
        const requestPerson = req.body;
        personServices.createPersonService(requestPerson).then((currentPerson) => {
            res.status(201).send({ data: currentPerson, message: `Sucessfully created record.` });
            // res.status(201).send();
        }).catch((err) => {
            res.status(500).send(error.internalServerError(err, 'CreatePerson'));
        });
    });
    routes.delete('/:id', (req, res, next) => {
        var id = req.params.id;
        if (id > 0) {
            personServices.deletePersonService(id).then(() => {
                res.status(200).send({ data: null, message: `Sucessfully delted records for Id : ${id}` });
            }).catch((err) => {
                res.status(500).send(error.internalServerError(err, 'CreatePerson'));
            });
        } else {
            res.status(400).send({ error: 'ID Not found', Message: 'Person Id Need to delete data' });
        }
    });
    return routes;
}