// const btnElement = document.getElementById("btn");
// const inputElement = document.getElementById("input");

// btnElement.addEventListener("click", handleClick);

// function handleClick() {
//   inputElement.value;
//   axios
//     .get(`https://dncuong.id.vn/api/users?search=${inputElement.value}`)
//     .then(({ data }) => {
//       console.log(data);
//       const ketQua = data
//         .map((value) => {
//           const str = `${value.name} - ${value.email} <br>`;
//           return str;
//         })
//         .join("");
//       document.getElementById("result").innerHTML = ketQua;
//     });
// }

// async function handleClick() {
//   inputElement.value;
//   const { data } = await axios.get(
//     `https://dncuong.id.vn/api/users?search=${inputElement.value}`
//   );
//   console.log(data);
//   const ketQua = data
//     .map((value) => {
//       const str = `${value.name} - ${value.email} <br>`;
//       return str;
//     })
//     .join("");
// }
