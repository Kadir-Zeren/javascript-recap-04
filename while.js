// * ===========
// * DONGULER(LOOPS)- WHILE
// * ===========

console.log(" ****** WHILE ******** ");

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("BYE");

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let not = prompt("Lütfen 0-100 arasinda bir not giriniz:");

// if (not < 0 || not > 100) {
//   console.log("Not 0'dan küçük veya 100'den büyük olamaz");
// }
//! -------- WHILE --------
// while (not < 0 || not > 100) {
//   console.log("Not 0'dan küçük veya 100'den büyük olamaz");
//   not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
// }

//!------ DO - WHILE -------

// let not;
// do {
//   not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
// //   if (not < 0 || not > 100) {
// //     alert("Not 0'dan küçük veya 100'den büyük olamaz");
// //   }
// } while (not < 0 || not > 100);

// console.log("Notunuz:", not);

//! ------ FOR ------

let not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
for (; not < 0 || not > 100; ) {
  alert("Not 0'dan küçük veya 100'den büyük olamaz");
  not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
}

//!--------------------
console.log("Notunuz:", not);