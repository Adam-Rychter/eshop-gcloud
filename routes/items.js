const express = require('express')
const Item = require('../models/item')

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})

router.post('/new', (req, res) => {
    const post = req.body
    console.log(post)
    const item = new Item({
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
    })

    item.save()
    .then(data => {
        res.status(200).json(data)
    })
    // res.status(200).send('<h2> New item recieved</h2><p>' + JSON.stringify(req.body) + '</p>')
})

module.exports = router