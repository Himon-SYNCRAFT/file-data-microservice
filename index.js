'use strict'

let express = require('express')
let multer = require('multer')

let app = express()
let upload = multer({ dest: 'uploads/' })
const port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.render('index')
})

app.post('/', upload.single('file'), (request, response) => {
    let filesize = request.file.size

    response.setHeader('Content-Type', 'application/json')
    response.send(JSON.stringify({ size: filesize }))
})

app.listen(port, () => {
    console.log('App started at port ' + port)
})
