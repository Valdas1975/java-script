//let userinfo = new Object();// sintakse objekto konstruktorius
let userinfo = { 
    name: "Valdas",
    age: 46,
    city: "Vilnius",
    adresas: "Kalvariju 188a-94",
    "likes javascript": true,

}; //sintakse literal objekto

console.log(userinfo);// cia iskvecia visa info
console.log(userinfo.name);//cia iskvecia kas nurodoma
console.log(userinfo.age);
console.log(userinfo.city);
console.log(userinfo.adresas);
console.log(userinfo["likes javascript"]);
console.log(userinfo ["adresas"]);
