function panggilPerulangan() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    for (let i = 0; i < dataKota.length; i++) {
        console.log(`${dataKota[i]} ${i}`);
    }

    console.log('\n')
    dataKota.forEach((item, index) => {
        console.log(`${item} ${index}`);
    });

    console.log('\n')
    dataKota.map((item, index) => {
        console.log(`${item} ${index}`);
    });
}

panggilPerulangan();