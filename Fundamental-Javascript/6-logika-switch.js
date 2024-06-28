// Struktur logika switch mirip seperti if else, tapi lebih efisien untuk pemeriksaan kondisi sederhana

/*
switch (variabel){
    case (condition1):
        statement 1;
        break;
    case (condition2):
        statement 2;
        break;
    case (condition3):
        statement 3;
        break;
    default:
        statement 4;
}
*/

let website = "twitter";

switch (website) {
  case "google":
    console.log("ini website google");
    break;
  case "twitter":
    console.log("ini website twitter");
    break;
  case "facebook":
    console.log("ini website facebook");
    break;
  default:
    console.log("bukan website google, twitter, maupun facebook");
}

let nilai = 7;

switch (nilai) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("ngapain aja selama ini");
    break;
  case 6:
  case 7:
  case 8:
    console.log("belajar lebih giat lagi");
    break;
  case 9:
  case 10:
    console.log("bagus pertahankan");
    break;
  default:
    console.log("masukkan nilai 1-10");
}
