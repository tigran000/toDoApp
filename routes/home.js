const { Router } = require('express')
const uuid = require('uuid/v4')
const route = Router()
const toDos = [];
let editToDo

route.get('/', (req, res) => {
    res.render('toDosList', { toDos })
})

route.post('/', (req, res) => {
    toDos.push({ id: uuid(), task: req.body.task })
    res.render('toDosList', { toDos })
})

route.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const index = toDos.findIndex(todo => todo.id === id)
    toDos.splice(index, 1)
    res.redirect('/')
})

route.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const index = toDos.findIndex(todo => todo.id === id)
    editToDo = toDos[index]
    res.redirect('/edit')
})

route.get('/edit', (req, res) => {
    res.render('editToDo')
})

route.post('/edit', (req, res) => {
    editToDo.task = req.body.task
    res.redirect('/')
})

module.exports = route