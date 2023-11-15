const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/test', controller.test)

router.get('/', controller.read)
router.post('/', controller.create)  
router.put('/:id', controller.update)
router.delete('/:id', controller._delete)

module.exports = router;