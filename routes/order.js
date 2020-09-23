const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})

router.post('/new', (req, res) => {
    console.log(req.body)
    const item = new Item({
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
    })

    item.save()
    .exec()
    .then(data => {
        res.status(200).json(data)
    })

    // res.status(200).send('<h2> New order recieved</h2><p>' + JSON.stringify(req.body) + '</p>')
})

module.exports = router