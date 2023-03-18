const ItemModel = require('./ItemModel');

module.exports.getAllItems = async (req, res) => {
    const items = await ItemModel.find().sort({done: 1});
    res.send(items);
}

module.exports.postItem = async (req, res) => {
    const { travelItem, done } = req.body;
    ItemModel.create({travelItem, done})
    .then((data) => {
        console.log('post data', data);
        res.send(data);
    })
    .catch ((err) => console.log('post err', err));
}

module.exports.checkItem = async (req, res) => {
    const { _id, done } = req.body;
    ItemModel.findByIdAndUpdate( _id, {done})
    .then((data) => {
        console.log('check data', data);
        res.send(data);
    })
    .catch ((err) => console.log('check err', err));
}

module.exports.editItem = async (req, res) => {
    const { _id, travelItem, done } = req.body;
    ItemModel.findByIdAndUpdate( _id, {travelItem, done} )
    .then((data) => {
        console.log('edit data', data);
        res.send(data);
    })
    .catch ((err) => console.log('edit err', err));
}

module.exports.deleteItem = async (req, res) => {
    const { _id } = req.body;
    ItemModel.findByIdAndDelete( _id )
    .then((data) => {
        console.log('delete data', data);
        res.send('Item deleted');
    })
    .catch ((err) => console.log('delete err', err));
}

module.exports.uncheckItem = async (req, res) => {
    const { _id, done } = req.body;
    ItemModel.findByIdAndUpdate( _id, {done})
    .then((data) => {
        console.log('uncheck data', data);
        res.send(data);
    })
    .catch ((err) => console.log('uncheck err', err));
}