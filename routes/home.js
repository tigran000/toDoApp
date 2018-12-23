const { Router } = require('express')

const route = Router()

route.get('/', (res, req) => {
    res.render('toDosList')
})

module.exports = route