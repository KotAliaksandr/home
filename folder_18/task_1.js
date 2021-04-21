const arr_one = [2, 7, 5, 19, 1, 15, 12, 14];

function compareNambers(arr_one) {
    arr_one.sort((c,b) => c - b);

    console.log(arr_one);
}

compareNambers(arr_one)
