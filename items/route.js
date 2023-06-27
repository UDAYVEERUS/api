const express = require('express')
const { addItems, getItems } = require('./controller')
const verifyJwt = require('../common/jwt')

// using express router for routing
const router = express.Router()

router.post(
    "/",
    verifyJwt,
    addItems
)
router.get(
    "/",
    verifyJwt,
    getItems
)

module.exports = router