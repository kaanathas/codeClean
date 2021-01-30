
// declare var users: Map<string, string>;
let users=new Map<string, string>();
users.set("id","kaana");
users.set("name","thas")

for (const [id, name] of users) {
  // iterate through users map
  console.log(id +" "+name)
}

function loadPage(count:number=10){

}

interface menu{
 title: string,
 body: string,
 buttonText: string,
 cancellable: true

}

function createMenu(obtion: menu | string ){
console.log(obtion)
}

createMenu({
title: "foo", 
body: " Bar",
buttonText:" Baz",
cancellable: true})