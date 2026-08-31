const users = [
    {
        id: 1,
        nome: "Ana Souza",
        email: "ana.souza@email.com"
    },
    {
        id: 2,
        nome: "Carlos Lima",
        email: "carlos.lima@email.com"
    }
];

function getUsers() {
    return users;
}

function getUserById(id) {
    return users.find(user => user.id === Number(id));
}

function addUser(user) {
    users.push(user);
    return user;
}

function updateUser(id, newData) {
    const index = users.findIndex(user => user.id === Number(id));

    if (index === -1) {
        return null;
    }

    users[index] = {
        ...users[index],
        ...newData,
        id: users[index].id
    };

    return users[index];
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === Number(id));

    if (index === -1) {
        return null;
    }

    return users.splice(index, 1)[0];
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};