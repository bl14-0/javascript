function balikKata(kata) {
    // return kata.split('').reverse().join('');
    var reverse = '';

    for(let i=kata.length-1;i>=0;i--) {
        reverse += kata[i];
    }

    return reverse;
}

console.log(balikKata('Niomic!'));
console.log(balikKata('JavaScript'));
console.log(balikKata('alohahola'));
console.log(balikKata('Jawa_Barat'));