var accountController = require('../controllers/accountController');

exports.getAll = async function (req, res) {

    return await accountController.getAll();
}