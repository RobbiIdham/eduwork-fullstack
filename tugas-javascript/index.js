// Tugas membuat array produk , menampilkan array dengan looping dan memfilter produk dengan kategori termurah dan termahal

//array list produk
const produk = [
  { nama: "Laptop", harga: 10000000 },
  { nama: "Smartphone", harga: 5000000 },
  { nama: "Tablet", harga: 3000000 },
  { nama: "Headphone", harga: 1000000 },
  { nama: "Smartwatch", harga: 2000000 },
  { nama: "Camera", harga: 7000000 },
];

// Menampilkan array menggunakan looping
for (let i = 0; i < produk.length; i++) {
  console.log(
    `Nama produk ${produk[i].nama} dengan harga : ${produk[i].harga}`,
  );
}

// filter produk termurah dan termahal
const hargaTermahal = produk.filter((item) => item.harga > 3000000);
const hargaTermurah = produk.filter((item) => item.harga <= 3000000);

// Menampilkan produk dengan harga lebih dari 3 juta dan produk dengan harga 3 juta atau kurang
console.log("\nProduk dengan harga lebih dari 3 juta:\n");
for (let i = 0; i < hargaTermahal.length; i++) {
  console.log(
    `Nama produk ${hargaTermahal[i].nama} dengan harga : ${hargaTermahal[i].harga}`,
  );
}
console.log("\nProduk dengan harga 3 juta atau kurang:\n");
for (let i = 0; i < hargaTermurah.length; i++) {
  console.log(
    `Nama produk ${hargaTermurah[i].nama} dengan harga : ${hargaTermurah[i].harga}`,
  );
}
