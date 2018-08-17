panggilforEach = () => {
    var data = ['a', 'b', 'c', 'e', 'p', 'o'];
    console.log(data);

    data.forEach((item, index, array) => {
        console.log(`${item} ${index}`);
    });
}

panggilforEach();