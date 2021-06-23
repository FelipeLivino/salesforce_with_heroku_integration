var accountController = require('../controllers/accountController');

exports.getAll = async function (req, res) {
    try{
        const accounts = await accountController.getAll();
        res.status(200).send(accounts);
    }catch (error) { 
        res.status(400).send(error).end();
    }
}

exports.get = async function (req, res) {
    try{
        const id = req.params.id;
        const accounts = await accountController.get(id);
        res.status(200).send(accounts);
    }catch (error) { 
        res.status(400).send(error).end();
    }
}



exports.update = async function (req, res) {
    const account = req.body;
    const id = req.params.id;
    try{
        await accountController.update(account, id);
        res.status(200).send({"success":true});
    }catch (error) { 
        res.status(400).send(error).end();
    }
}