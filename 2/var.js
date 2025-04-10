
// Biến khai báo với var có phạm vi là function-scope.
scopeVar();

function scopeVar(){
    // undefined (biến x được khai báo nhưng chưa gán giá trị)
  
  if (true) {
      console.log("x - 7:" , x); 
      var x = 20;
      var x = 15;
    }
    
}
// scopeVar();

// console.log(x); // Lỗi ReferenceError: x is not defined (biến x không được định nghĩa bên ngoài hàm)


// // Biến khai báo với var có thể được khai báo lại và gán giá trị mới trong cùng một phạm vi (scope).
// function test() {
//     var x = 10;
//     if (true) {
//       var x = 20; // Ghi đè biến x bên ngoài
//       console.log(x); // 20
//     }
//     console.log(x); // 20 (không có block scope)
//   }
//   test();