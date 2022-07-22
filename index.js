const http = require('http');

const srv = http.createServer((req, res) => { // dois parametros request e response
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpsVersion);

    if (req.method === "POST") {
        res.whiteHead(201, {
            'Content-type': 'application/json'
        })

        res.write('{"message": Cadastro efetuado com sucesso!"}')
    }

    if (req.method === "GET") {
        res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    res.write(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Programador a bordo</title>
        </head>
        <body>
            <h1>Programador a bordo</h1>
        </body>
    </html>
    `)
    res.end()
}
});

srv.listen(3001, () => {
    console.log('Servidor funcionando')
});