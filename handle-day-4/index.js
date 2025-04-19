// bai1

// const a = [1, 2, 3, 4, 5]
// const b = a.map((value)=>value *=2);
// console.log(a)
// console.log(b)

// bai2

// const a = ["Alice", "Bob", "Charlie"]
// const b = a.map((value) => "Hi, " + value)
// console.log(b)

// bai3

// const a = [1000, 2500, 500]
// const b = a.map((value) => value /1000)
// console.log(b)

// bai4

// const a = [{ ten: "Alice", tuoi: 15 }, { ten: "Bob", tuoi: 16 }]
// const b = a.map((value) => {
//     // const c = {
//     //     ten : value.ten,
//     //     tuoi : value.tuoi +1
//     // }
//     // return c
//     value.tuoi+=1
//     return value
// });
// console.log(a)

// bai5

// const a = ["Apple", "Banana", "Orange"]
// const b = a.map((value, index) => "Item "+(index+1) +": " +value)
// console.log(b)

// bai6

// const a  =[1, 2, 3, 4, 5]
// const b = a.reduce((prev, curr)=>prev + curr)
// console.log(b)

// bai7

// const a  =[10, 5, 8, 12, 3]
// const b = a.reduce((prev,curr)=>curr>=prev?curr:prev)
// console.log(b)

//bai8

// const a = ["apple", "banana", "apple", "orange", "banana"]
// const b = a.reduce((prev,curr) =>{
//     if (!prev[curr]) {
//         prev[curr] = 1
//     } else {
//         prev[curr]++
//     }
//     return prev
// },{})
// console.log(b)

// bai9

// const a  =["Hello", "world", "from", "JS"]
// const b = a.reduce((prev,curr)=>prev+" "+curr)
// console.log(b)

// bai10

// const a  =[{ ten: "Alice", diem: 80 }, { ten: "Bob", diem: 85 }]
// const b = a.reduce((prev,curr)=>prev +curr.diem,0)
// console.log(b)

// bai11

// const a  =[1, 2, 3, 4]
// const b = a.map((value)=>Math.pow(value,2))
// const c = b.reduce((prev,curr)=>prev+curr)
// console.log(c)

// bai12

// const a  = ["alice", "bob", "charlie"]
// const b = a.map((value)=>value.toUpperCase())
// const c = b.reduce((prev,curr)=>prev+curr.length,0)
// console.log(a)
// console.log(b)
// console.log(c)

// bai13

// const a  = [{ ten: "Alice", diem: 90 }, { ten: "Bob", diem: 75 }, { ten: "Charlie", diem: 85 }]
// const b = a.map((value)=> value.diem)
// const c = b.reduce((prev,curr)=>(prev+curr),0)/b.length
// console.log(a)
// console.log(b)
// console.log(c)

// bai14

// const a  = [1, 2, 3]
// const b = a.map((value)=> 'Số '+value)
// const c = b.reduce((prev,curr)=>(prev+", "+curr))
// console.log(a)
// console.log(b)
// console.log(c)

// bai15

// const a  = [{ ten: "Pen", gia: 1000 }, { ten: "Book", gia: 5000 }]
// const b = a.map((value)=> {
//     const d = {
//         ten : value.ten,
//         gia : (value.gia - (value.gia * 10/100))
//     }
//     return d
// })
// const c = b.reduce((prev,curr)=>(prev+curr.gia),0)
// console.log(a)
// console.log(b)
// console.log(c)