function logger(req, res, next) {
    console.log('${req.method} ${req.originalurl} ${res.statusCode}');
    xt();
}

module.exports =logger;