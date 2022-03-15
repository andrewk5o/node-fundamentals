const Router = require('../framework/Router.js');

const router = new Router();

const {getUsers, createUser} = require("./user-controller.js");

router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router;