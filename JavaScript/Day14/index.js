let obj = {
    name: "Dharmu",
    age: 23,
    gender: "male",
    city:"Nalanda"
}

//for in loop

// for(let key in obj)
// {
//     console.log(key, obj[key]);
// }

let obj2 = Object.create(obj);

obj2.monkey = 420;
obj2.id = 689;

// console.log(obj2);

console.log(Object.keys(obj2)); // only own properties show karega
for(let key in obj2)  // inherited properties bhi show karega
{
    console.log(key);
}