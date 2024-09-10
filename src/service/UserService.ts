const UserModel = require('../models/UserModel');
const User = require('../interface/UserInterface');

async function getAllUsers()
{
    const listUsers = await UserModel.findAll();
    return listUsers;

}

async function getAllUsersByNivelAnsiedade()
{
    const listUsers = await UserModel.findAll(
        {
            order: [['nivelAnsiedade', 'desc']]
        }
    );
    return listUsers;

}
async function getAllUsersByDataNascimento()
{
    const listUsers = await UserModel.findAll({
        order: [['dataNascimento', 'desc']]
    });
    return listUsers;

}

async function getUserById(idUser: number) 
{
    const user = await UserModel.findByPk(idUser);
    return user;

}

async function addUser(userDTO: typeof User)
{
    const newUser = await UserModel.create
    ({
        nameUser: userDTO.nameUser,
        location: userDTO.location,
        capacity: userDTO.capacity,
        openingDate: userDTO.openingDate,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    return newUser;
}

async function updateUser(userDTO: typeof User)
{
    const oldUser = await UserModel.update(userDTO,
        {
            where:
            {
                idUser: userDTO.idUser
            }
        })
    return oldUser;
}

async function deleteUser(idUser: number) 
{
    const deletedUser = await UserModel.findByPk(idUser);
    deletedUser.destroy();

}

module.exports = 
{
    getAllUsers,
    getAllUsersByNivelAnsiedade,
    getAllUsersByDataNascimento,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
} 