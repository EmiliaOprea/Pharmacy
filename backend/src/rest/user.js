var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.list);
router.get('/:id_client', user.findById);
router.post('/', user.create);
router.delete('/:id_client', user.delete);
router.put('/:id_client',user.update);

module.exports = router;
