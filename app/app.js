var http = require("http"),
    /**
     * url - встроенный модуль NodeJS, необходимый для парсинга адресной строки;
     */
    url = require("url"),
    EventEmitter = require("events").EventEmitter,
    User = require("./user").user_constructor;

var server =  new http.Server();
/**
 * request - входящее событие;
 * функция callback'a имеет 2 аргумента:
 *  1) req - информация, которую присылает браузер (объект запроса);
 *  2) res - информация, которую мы передаём браузеру (объект ответа);
 */
server.on('request', function(req, res){

    var _parsedUrl = url.parse(req.url, true);
    if(_parsedUrl.pathname == '/some' && _parsedUrl.query.message == 'test'){
        res.end('Hi');
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }

});
server.listen(4000, '127.0.0.1');