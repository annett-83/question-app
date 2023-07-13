const Profession = require("../models/Profession");
const Subject = require("../models/Subject");
const professionMock = require("../mock/profeessions.json");
const subjectsMock = require("../mock/subjects.json");


module.exports = async () => {
  const professions = await Profession.find();
  if (professions.length !== professionMock.length) {
    await createInitialEntity(Profession, professionMock);
  }
  const subjects = await Subject.find();
  if (subjects.length !== subjectsMock.length) {
    await createInitialEntity(Subject, subjectsMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
