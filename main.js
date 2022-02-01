const express = require('express')

const app = express()

console.log('Jenkins Build');

app.get('/',(req,res)=>{
        console.log('mjksss');
        res.send('klogopi')
})

console.log('mjk');
app.listen(5050)

