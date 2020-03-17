const mongoose = require('mongoose');

const IngredientSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Please add ingredient name'],
    maxlength: [50, 'Name cannot be more than 50 character'],
  },
  cost: {
    type: Number,
    required: [true, 'Please add ingredient cost'],
  },
  currentStock: {
    type: Number,
    default: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ingredient', IngredientSchema);
