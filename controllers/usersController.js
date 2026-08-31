const {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} = require('../data/users');

function validateUserData(nome, email) {
    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        return 'O campo nome é obrigatório e deve ser válido.';
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
        return 'O campo email é obrigatório e deve ser válido.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return 'O endereço de e-mail informado é inválido.';
    }

    return null;
}

function listUsers(req, res) {
    return res.status(200).json({
        data: getUsers()
    });
}

function getUser(req, res) {
    const user = getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({
            error: {
                status: 404,
                message: 'Usuário não encontrado.'
            }
        });
    }

    return res.status(200).json({
        data: user
    });
}

function createUser(req, res) {
    const { nome, email } = req.body;

    const validationError = validateUserData(nome, email);

    if (validationError) {
        return res.status(400).json({
            error: {
                status: 400,
                message: validationError
            }
        });
    }

    const newUser = {
        id: Date.now(),
        nome: nome.trim(),
        email: email.trim()
    };

    addUser(newUser);

    return res.status(201).json({
        data: newUser
    });
}

function editUser(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;

    const user = getUserById(id);

    if (!user) {
        return res.status(404).json({
            error: {
                status: 404,
                message: 'Usuário não encontrado.'
            }
        });
    }

    const validationError = validateUserData(nome, email);

    if (validationError) {
        return res.status(400).json({
            error: {
                status: 400,
                message: validationError
            }
        });
    }

    const updatedUser = updateUser(id, {
        nome: nome.trim(),
        email: email.trim()
    });

    return res.status(200).json({
        data: updatedUser
    });
}

function removeUser(req, res) {
    const user = getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({
            error: {
                status: 404,
                message: 'Usuário não encontrado.'
            }
        });
    }

    deleteUser(req.params.id);

    return res.status(204).send();
}

module.exports = {
    listUsers,
    getUser,
    createUser,
    editUser,
    removeUser
};