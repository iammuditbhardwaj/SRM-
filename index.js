// async module


// to work with asynchronous code in javascript, we use async module


const async = require("async");
const fs = require("fs");
const { config } = require("process");

const obj = {
    name : './name.json',
    test : './test.json',
    dev:'./dev.json'
};


const configuration = {};

async.forEachOf(obj, (value, key, callback) => {
    fs.readFile(__dirname + value, "utf-8", (err, data) => {
        if (err) return callback(err);
        try {
            config[key] = JSON.parse(data);

        } catch (e) {
            return callback(e)
        }    })
}, (err) => {
if (err) console.log(err.message);

doSomethingWith(configuration);
})