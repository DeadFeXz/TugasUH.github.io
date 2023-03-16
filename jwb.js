//No 1.
function cetakfunction (a){
  return `Hallo nama Saya` + a   
}

console.log(cetakfunction(" Faiz "));

//No 2. 
let angka1 = 20
let angka2 = 7


function MyFunction (a,b){
    return a + b;
}

let output = MyFunction (angka1, angka2)
console.log(output)


//NO 3.

const hello = () => {return "Hello"}
let out=hello();
console.log(out)


//NO 4.

let obj = {
    nama : "John",
    umur: "22",
    bahasa: "indonesia",
    showName: function(){
        console.log(` ${this.bahasa}`); 
    }
}

obj.showName();


//No 5.

let array  = ["John Doe", "Laki-Laki", "baca buku", 1992];
let objDaftar = {
    nama : array [0],
    jenisKelamin: array [1],
    hobi: array[2],
    lahir: array [3],
}
console.log(objDaftar);

//No 6.

let buah = [{
        nama: `nanas`,
        warna: `kuning`,
        adaBijinya: `tidak`,
        harga: 9000       
    },
    {
        
    },
    {
        nama: `Jeruk`,
        warna: `oranye`,
        adaBijinya: `ada`,
        harga: 8000
    },
    {
        nama: `Semangka`,
        warna: `Hijau & Merah`,
        adaBijinya: `ada`,
        harga: 10000
    },
    {
        nama: `Pisang`,
        warna: `Kuning`,
        adaBijinya: `tidak`,
        harga: 8000
    },
    {
        nama: `Alpukat`,
        warna: `hijau`,
        adaBijinya: `tidak`,
        harga: 8000
    },

    ]
    
    let berbiji = buah.filter
    ((buah) => buah.adaBijinya == 'tidak');
    console.log(berbiji)