const m = require('mithril')
const config = require('../../admin-src/config-main');

const Request = {
    postEncoded : (opts) => {
        var promise = m.request({
            method: "POST",
            url: opts.url,
            serialize: function(data) { return m.buildQueryString(data) },
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded',
                'API-KEY': config.front
            },
            data : opts.data
        });

        return promise;
    },
    postBody: (opts) => {
        const promise = m.request({
            method : "POST",
            data : opts.data,
            url : opts.url,
            headers: {
                'API-KEY': config.front
            }
        })

        return promise;
    },
    put: (opts) => {
        const promise = m.request({
            method : "PUT",
            data : opts.data,
            url : opts.url,
            headers: {
                'API-KEY': config.front
            }
        })

        return promise;
    },
    get : (opts) => {
        const promise = m.request({
            method : "GET",
            url : opts.url + "?" + m.buildQueryString(opts.data),
            headers: {
                'API-KEY': config.front
            }
        });

        return promise;
    },
    putEncoded: (opts) => {
        const promise = m.request({
            method : "PUT",
            data : opts.data,
            url : opts.url,
            serialize: function(data) { return m.buildQueryString(data) },
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded',
                'API-KEY': config.front
            }
        })

        return promise;
    },
    delete: (opts) => {
        const promise = m.request({
            method : "DELETE",
            data : opts.data,
            url : opts.url,
            headers: {
                'API-KEY': config.front
            }
        })

        return promise;
    }
}

module.exports = Request