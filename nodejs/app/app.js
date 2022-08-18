var express = require('express');
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

const dbConfig = {
    host: 'mysql',
    user: 'appnode',
    password: '12345',
    database: 'desafionode'
};


var app = express();

app.get('/', (req, res) => pagina('Leila', res));
app.get('/:nome', (req, res) => pagina(req.params.nome, res));
app.listen(3000, function () {
  console.log('App inicializada na porta 3000!');
});

async function pagina(nome, res){
    accessaBanco(nome).then(nomes=> 
        {   
            let resposta = '<html><body><h1>Full Cycle Rocks!</h1><ol>';
            for (i=0; i<nomes.length; i++) {
                resposta += '<li>' + nomes[i].name + '</li>'
            }
            resposta += '</ol></body></html>\n'; 
            res.contentType("html");
            res.send(resposta);
        }  
      ).catch(e=>{
        res.contentType("html");
        res.send("Erro acessando o banco. Espere um pouco e tente novamente.");
        console.error("Erro acessando banco: "+e);
      }) ;
}

async function accessaBanco(nome) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('INSERT INTO people VALUES (?);',[nome]);
    const [rows, fields] = await connection.execute('SELECT * FROM `people`');

    await connection.close();
    return rows;
  }
  