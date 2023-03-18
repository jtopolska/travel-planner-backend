const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        travelItem: {
            type: String, 
            required: true
        },
        done: Boolean
    }
)

const ItemModel = mongoose.model('ItemModel', itemSchema);

module.exports = ItemModel;