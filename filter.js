panggilFilter = () => {
    var arr = [1,2,3,4,5];
    var arrGanjil = arr.filter((item) => {
        return item % 2 !== 0;
    });
    console.log(arrGanjil);

    var arr = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];
    var benuaEropa = arr.filter((item) => {
        return item.benua === 'Eropa';
    });
    console.log(benuaEropa);
}

panggilFilter();