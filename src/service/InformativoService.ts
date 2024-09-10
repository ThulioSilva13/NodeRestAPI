const InformativoModel = require('../models/InformativoModel');
const Informativo = require('../interface/InformativoInterface');

async function getAllInformativos()
{
    const listInformativos = await InformativoModel.findAll();
    return listInformativos;

}

async function getAllInformativosByTitulo(titulo: string)
{
    const informativo = await Informativo.findOne({
        where: {
        titulo: titulo
        }
    });
    return informativo;
}


async function getInformativoById(idInformativo: number)
{
    const informativo = await InformativoModel.findByPk(idInformativo);
    if(informativo == null)
    {
        return "Não foi possível encontrar o time";
    }
    return informativo;

}

async function getAllInformativosByDataPublicacao()
{
    const listInformativos = await InformativoModel.findAll({
        order: [['dataPublicacao', 'desc']]
    });
    return listInformativos;

}

async function addInformativo(informativoDTO: typeof Informativo)
{
    const newInformativo = await InformativoModel.create
    ({
        idUser: informativoDTO.idUser,
        nameInformativo: informativoDTO.nameInformativo,
        logo: informativoDTO.logo,
        championships: informativoDTO.championships,
        conference: informativoDTO.conference,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    return newInformativo;
}

async function updateInformativo(informativoDTO: typeof Informativo)
{
    const oldInformativo = await InformativoModel.update(informativoDTO,
        {
            where:
            {
                idInformativo: informativoDTO.idInformativo
            }
        })
    return oldInformativo;
}

async function deleteInformativo(idInformativo: number) 
{
    const deletedInformativo = await InformativoModel.findByPk(idInformativo);
    deletedInformativo.destroy();
}

module.exports = 
{
    getAllInformativos,
    getAllInformativosByTitulo,
    getInformativoById,
    getAllInformativosByDataPublicacao,
    addInformativo,
    updateInformativo,
    deleteInformativo,
} 