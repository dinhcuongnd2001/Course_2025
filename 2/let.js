// Biến khai báo với let có phạm vi là block-scope.

function scopeLet(){

    if (true) {
        // Lỗi ReferenceError: x is not defined (biến x không được định nghĩa bên ngoài hàm)
        // undefined (biến x được khai báo nhưng chưa gán giá trị)
        let x = 20;
        console.log("x -6 :", x); // 20
    }
    
}
// console.log("a :", a);
// function test() {
//   let x = 10;
//   if (true) {
//     let x = 20; // Biến x riêng biệt trong block
//     console.log(x); // 20
//   }
//   console.log(x); // 10 (x bên ngoài không bị ảnh hưởng)
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
//   }
//   console.log(i);

scopeLet();

// test()