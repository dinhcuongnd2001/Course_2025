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

const nameCheck = document.getElementById("name");
const emailCheck = document.getElementById("input");

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!nameCheck.value) alert("Nhap ten");
  if (!emailCheck.value) alert("Nhap mail");
  // if (!emailCheck.value || !nameCheck.value) alert("Nhap day du");
  const reposnse = await axios.post(
    `https://dncuong.id.vn/api/users`,
    {
      name: nameCheck.value,
      email: emailCheck.value,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log(reposnse);
};
