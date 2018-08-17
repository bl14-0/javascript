panggilSplice = () => {
    var kota = ['Jakarta', 'Medan', 'Padang', 'Malang'];
    console.log(kota);

    kota.splice(2, 1);
    console.log(kota);
    kota.splice(2, 0, 'Palembang');
    console.log(kota);
}

panggilSplice();