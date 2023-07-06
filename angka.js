let tanya = true;
while (tanya) {
  // menangkap pilihan player
  alert("Selamat datang di game tebak angka \nTebak angka dari 1 - 10");

  let p = prompt("Pilih angka 1 - 10");

  // membangkitkan pilihan random
  let comp = Math.floor(Math.random() * 10) + 1;

  // mennetukan rules
  let hasil = "";
  if (p == comp) {
    hasil = "anda MENANG!";
  } else if (p > comp) {
    hasil = "terlalu BESAR!";
  } else if (p < comp) {
    hasil = "terlalu RENDAH!";
  } else {
    hasil = "memasukkan angka yang salah";
  }

  alert(
    "angka yang anda pilih : " +
      p +
      "\n" +
      hasil +
      "\nAngka yang dicari adalah : " +
      comp
  );
  tanya = confirm("Lagi??");
}

alert("Terimakasih..");
