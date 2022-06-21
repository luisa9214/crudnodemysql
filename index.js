var mysql = require('mysql');

const express = require ('express')
const server = express ()
server.use(express.json())

const port = 3000

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lulu1212",
    dataBase: "crudNode"
});

con.connect((err) =>{
    if(err){
        console.log('erro na conexão');
        return;
    }
    console.log('conexão estabelecida');
});

server.get('/allPeople', (req,res) =>{
    const allPeople = 'select * from turmaBB'
    con.query('select * from turmaBB', function(err, result, fields){
        if(err) throw err
        if (result.length==0) res.send('vazio')
        res.send(result)
    })
})

server.get('/searchByUID/:uid', (req, res)=>{
    const uid = req.params.uid
    con.query(`select * from turmaBB where UIdUser = ${uid}`)})

server.listen(port, ()=>{console.log(`running at 'localhost:${port}'`)})