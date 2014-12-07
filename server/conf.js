module.exports = {

    server:{
        port:{
            dev: 1337,
            prod:8888
        },
        host:{
            dev:"0.0.0.0"
        }
    },
    db:{
        dev:{
            type:"mongodb",
            url:"127.0.0.1",
            port:27017
        },
        prod:{
            type:"mongodb",
            url:"somewhereelse",
            port:27127
        }
    }

}