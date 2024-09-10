const MoodModel = require('../models/MoodModel');
const Mood = require('../interface/MoodInterface');

async function getAllMoods()
{
    const listMoods = await MoodModel.findAll();
    return listMoods;

}

async function getMoodById(idMood: number) 
{
    const mood = await MoodModel.findByPk(idMood);
    return mood;

}

async function addMood(moodDTO: typeof Mood)
{
    const newMood = await MoodModel.create
    ({
        data: moodDTO.data,
        idDOMHumor: moodDTO.idDOMHumor,
        observacao: moodDTO.observacao
    })
    return newMood;
}

async function updateMood(moodDTO: typeof Mood)
{
    const oldMood = await MoodModel.update(moodDTO,
        {
            where: 
            {
                idMood: moodDTO.idMood
            }
        })
    return oldMood;
}

async function deleteMood(idMood: number) 
{
    const deletedMood = await MoodModel.findByPk(idMood);
    deletedMood.destroy();
}

module.exports = 
{
    getAllMoods,
    getMoodById,
    addMood,
    updateMood,
    deleteMood,
} 