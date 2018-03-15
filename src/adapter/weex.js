//weex adapter
var stream = weex.requireModule('stream');
module.exports = function (request, responseCallback) {
    stream.fetch(request, function (res) {
        if (res.ok) {
            responseCallback({
                statusCode: res.status,
                responseText: res.data,
                headers: res.headers,
                statusMessage: res.statusText
            })
        } else {
            responseCallback({
                statusCode: res.status || 0,
                statusMessage: res.statusText
            })
        }
    });
}