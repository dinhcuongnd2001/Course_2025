const a = [1, 2, 'a', 'b' , {name: 'a' }, {name: 'b'}];

a.forEach((element, index, array) => {
    console.log('index :' +  index  + " - value - ", element);
    console.log("array - ", array);
})


