module.exports = {

    createUser: (req, res) => {
        const { username, password } = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.create_user([username, password])
            .then(user => res.status(200).send(user))
    },

    login: (req, res) => {
        const { username, password } = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.login([username, password])
            .then(user => res.status(200).send(user))
    }
}