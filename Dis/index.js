"use strict";
// declare var users: Map<string, string>;
let users = new Map();
users.set("id", "kaana");
users.set("name", "thas");
for (const [id, name] of users) {
    // iterate through users map
    console.log(id + " " + name);
}
function loadPage(count = 10) {
}
function createMenu(obtion) {
    console.log(obtion);
}
createMenu({
    title: "foo",
    body: " Bar",
    buttonText: " Baz",
    cancellable: true
});
