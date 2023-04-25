const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/suzume.mp4')
})

app.listen(port, () => {
    console.log(`Server listening at port : ${port}`)
})
