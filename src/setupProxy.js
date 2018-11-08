const proxy = require('http-proxy-middleware');

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

module.exports = function (app) {

    var reverseProxy = proxy('/api', {
        target: 'http://localhost:8080/',
        pathRewrite: {
            '^/api': ''
        },
        onProxyRes: function (proxyRes, req, res) {
            var _write = res.write;
            var output;
            var body = "";
            proxyRes.on('data', function (data) {
                data = data.toString('utf-8');
                body += data;
            });

            res.write = function (data) {
                try {
                    body = body.replaceAll("http://localhost:3000/", "http://localhost:3000/api/")
                    eval("output=" + body)
                    _write.call(res, JSON.stringify(output));
                } catch (err) { }
            }
        }
    });

    app.use(reverseProxy);
}
