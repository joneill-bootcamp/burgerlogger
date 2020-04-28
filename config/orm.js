var db = require('./config/connection.js');

function selectAll(query) {
    console.log(query);
}

function insertOne(query) {
    console.log(query);
}

function updateOne(query) {
    console.log(query);
}

module.exports({
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
})