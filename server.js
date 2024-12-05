const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    // Проверка времени выполнения кода
    const start = new Date();
    while (new Date() - start < 3000) {}
    console.log(new Date() - start);


    switch (request.url) {
        case '/': // обработка запроса к корню сайта
        case '/home':
            fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
                if (err) {
                    response.writeHead(500); // Серверная ошибка
                    response.end(err);
                } else {
                    response.writeHead(200); // 200 OK
                    response.end(data);
                }
            });
            break;
        case '/favicon.ico': // обработка запроса к favicon.ico
            fs.readFile(path.join(__dirname, 'favicon.ico'), (err, data) => {
                if (err) {
                    response.writeHead(404); // Not Found
                    response.end();
                } else {
                    response.writeHead(200, {'Content-Type': 'image/x-icon'}); // Установили Content-Type
                    response.end(data);
                }
            });
            break;
        default:
            response.writeHead(404);
            response.end('404 not found');
    }
});


const path = require('path'); // импорт модуля path
const port = 3003;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// server.listen(3003)
// const http = require('http')
// // const server  = http.createServer((request, response) =>{
// //     response.write('IT-Camasutra')
// //     response.end('IT-Camasutra')
// // })
// // server.listen(3000)
