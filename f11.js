// object destructuring

const band = {
    name: "led zeppelin",
    song: "stairway to heaven",
    age: 22,
    height: 168,
}


// storing keys value in variable

// const name = band.name;
// const song = band.song;
// console.log(name, song);


//================ destructuring

// let { name: var1, song: var2 } = band;
// console.log(var1);
// console.log(var2);

let { name, song, ...restProperty } = band;
console.log(restProperty);
