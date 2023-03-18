const Router = require('express');
const { getAllItems, postItem, checkItem, editItem, deleteItem, uncheckItem } = require('./ItemController');
const router = Router();

router.get('/', getAllItems);
router.post('/post', postItem);
router.post('/check', checkItem);
router.post('/edit', editItem);
router.post('/delete', deleteItem);
router.post('/uncheck', uncheckItem);

module.exports = router;