function tipeData()
{
    var data = '2';
    console.log(typeof(data));

    if(data === '2')
    {
        return data;
    }
    else
    {
        return 'Gagal';
    }
}

console.log(tipeData());