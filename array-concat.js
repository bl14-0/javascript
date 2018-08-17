panggilConcat = () => {
    var kota = ['Jakarta', 'Medan', 'Bekasi', 'Malang'];
    var kabupaten = ['Lampung Timur', 'Jombang', 'Kediri'];

    var first_name = "Billy";
    var last_name = "Hendrawan";

    console.log(kota);
    console.log(kabupaten);

    var hasil = kota.concat(kabupaten);
    console.log(hasil);

    var full_name = first_name.concat(last_name);
    console.log(full_name);
}

panggilConcat();