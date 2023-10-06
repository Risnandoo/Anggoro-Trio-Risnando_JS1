console.log("if-else statement")
//if-else
let myName = "Anggoro Trio Risnando"
let myFood = "Nasi Goreng"

if (myFood == "Bakso") {
    console.log(`${myName} sedang makan bakso`)
} else if (myFood == "Nasi Goreng") {
    console.log(`${myName} sendang makan Nasi Goreng`)
} else if (myFood == "Ayam Geprek") {
    console.log(`${myName} sedang makan Ayam Geprek`)
} else {
    console.log(`Belum makan 3 hari`)
}
console.log("--------------------------------------------------------");
//nested if
console.log("Nested If")
if (myName == "Anggoro Trio Risnando") {
    if (myFood == "Nasi Goreng") {
        console.log(`${myName} sudah makan Nasi Goreng`)
    } else if (myFood == "Bakso") {
        console.log(`${myName} sudah makan Bakso`)
    } else {
        console.log(`${myName} Belum makan 3 hari`)
    }
} else {
    console.log("Makhluk asing")
}

console.log("--------------------------------------------------------");
console.log("Switch-case")
//switch case
let hari = "Jum'at"
switch (hari) {
    case "Senin":
        console.log(`Hari ini hari Senin`)
        break;
    case "Selasa":
        console.log(`Hari ini hari Selasa`)
        break;
    case "Rabu":
        console.log(`Hari ini hari Rabu`)
        break;
    case "Kamis":
        console.log(`Hari ini hari Kamis`)
        break;
    case "Jum'at":
        console.log(`Hari ini hari Jum'at`)
        break;
    case "Sabtu":
        console.log(`Hari ini hari Sabtu`)
        break;
    case "Minggu":
        console.log(`Hari ini hari Minggu`)
        break;
    default:
        console.log("Hari ini hari libur")
}


console.log("--------------------------------------------------------");
console.log("For Statement")
//for statement
let angka = []
for (let i = 1; i <= 10; i++) {
    angka.push(i)
}
console.log(angka)

console.log("--------------------------------------------------------");
console.log("While")
//while
let angkaGenap = 0;
let urutanGenap = []

while (angkaGenap < 10) {
    angkaGenap += 2;
    urutanGenap.push(angkaGenap)
}
console.log(urutanGenap)

//do-while
console.log("--------------------------------------------------------");
console.log("do-while")
let jumalahHari = 1;
let seminggu = []
do{
    seminggu.push(jumalahHari)
    jumalahHari++
}while(jumalahHari <= 7)
console.log(seminggu)

//function
console.log("--------------------------------------------------------");
console.log("function")
function belajar(nama, tempat){
    console.log(`${nama} belajar di ${tempat}`)
}
belajar("Anggoro Trio Risnando", "Infinite Learning")

//arrow fucntion with return
const perkalian = (a, b) =>{
    return a * b
}
const hasil = perkalian(2, 3)
console.log(`hasil = ${hasil}`)
const hasil2 = perkalian(5,6)
console.log(`hasil2 = ${hasil2}`)
const hasilAkhir = hasil + hasil2
console.log(`hasil akhir = ${hasilAkhir}`)

//arrow function without return
const penjumlahan = (a, b) =>{
    console.log(`hasil penjumlahan = ${a + b}`)
}
penjumlahan(2, 3)
penjumlahan(5, 5)