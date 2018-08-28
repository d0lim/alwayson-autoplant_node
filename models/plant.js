const mongoose = require('mongoose');

// Define Schemes
const plantSchema = new mongoose.Schema({
  plantName: { type: String, required: true, unique: true},
  plantPhase: { type: Number, required: false, default: 0},
  waterCycle: { type: Number, required: true},
  dayStart: { type: Number, required: true}, //LED ON
  dayEnd: { type: Number, required: true}, //LED OFF
  temperatureGT: { type: Number, required: false}, //Temperature Greater Than
  temperatureLT: { type: Number, required: false}, //TemperatureLess Than
  vaporationGT: { type: Number, required: false}, //Vaporation Greater Than
  vaporationLT: { type: Number, required: false}, //Vaporation Less Than
  completed: { type: Boolean, default: false }
},
{
  timestamps: true
});

//Create New Plant DataBase
plantSchema.statics.create = function(payload) {
  //this === model
  const newPlant = new this(payload);
  //return promise
  return newPlant.save();
}

// Find All
plantSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by plantName
plantSchema.statics.findOneByPlantName = function (plantName) {
  return this.findOne({ plantName });
};

// Update by plantName
plantSchema.statics.updateByPlantName = function (plantName, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ plantName }, payload, { new: true });
};

// Delete by plantName
plantSchema.statics.deleteByPlantName = function (plantName) {
  return this.remove({ plantName });
};

// Create Model & Export
module.exports = mongoose.model('Plant', plantSchema);