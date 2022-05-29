// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//Favorite Color
//Monica
const favoriteColorMonica = Array.from(new Set ([
    "Yellow", "Pink", "White", "Purple"
])
)

//Wendy
const favoriteColorWendy = Array.from(new Set ([
    "Blue", "Black", "Grey"
])
)

//isHavePet
let isHavePet = new Map();
isHavePet.set('Monica','Yes');
isHavePet.set('Wendy','No');

//Education
//Monica 
 const educationMonica = [
        "name: SD 01, city: Jakarta, graduate: 2016", 
        "name: SMP 02, city: Jakarta, graduate: 2019",
        "name: SMA 03, city: Tangerang"
 ];

// Wendy
const educationWendy = [
        "name: SD 02, city: Jakarta, graduate: 2010",
        "name: SMP 03, city: Bogor, graduate: 2013",
        "name: SMA 01, city: Surabaya, graduate: 2016",
        "name: Universitas Maju, city: Tangerang"
];

//Favorite Resto
//Monica
const favoriteRestaurantMonica = Array.from(
    new Set([
      "Bento",
      "Sushi",
      "Pancake",
      "Eggy",
      "Tempura",
      "Bento",
      "Eggy",
      "Padang",
      "Tteok",
      "Sushi",
      "Sushi"
    ])
)

//Wendy
const favoriteRestaurantWendy = Array.from(
    new Set([
        "Tempura",
        "Bento",
        "Sushi",
        "Pancake",
        "Padang",
        "Katsu",
        "Geprek",
        "Pancake",
        "Eggy"
    ])
)

const firstUser = {
    name: "Monica",
    gender:"Female",
    age:"17",
    email:"monica@dingdong.com",
    favoriteColor: favoriteColorMonica,
    isHavePet: isHavePet.get('Monica'),
    education: educationMonica,
    favoriteRestaurant: favoriteRestaurantMonica
};

const secondUser = {
    name: "Wendy",
    gender:"Male",
    age: "23",
    email:"wendy@dingdong.com",
    favoriteColor: favoriteColorWendy,
    isHavePet: isHavePet.get('Wendy'),
    education: educationWendy,    
    favoriteRestaurant: favoriteRestaurantWendy    
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};