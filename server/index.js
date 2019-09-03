const express = require('express')
const app = express()
const SERVER_PORT = 3001
const msgCtrl = require('./controllers/messages_controllers')

app.use(express.json)
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} monkeys jumping on the bed`))

const messageBaseUrl = '/api/messages'
app.post(messageBaseUrl, msgCtrl.create)
app.get(messageBaseUrl, msgCtrl.read)
app.put(`${messageBaseUrl}/:id`, msgCtrl.update)
app.delete(`${messageBaseUrl}/:id`, msgCtrl.delete)

