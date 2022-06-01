const express = require('express');
const router = express.Router();

const registroController = require('../controller/registro');

router.route('/')
        .get(registroController.listAll)
        .post(registroController.post);

module.exports = router;