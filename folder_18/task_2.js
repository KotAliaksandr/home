const arr_two = [1, false, null, undefined, 7, 8, 0, -0, NaN, 10, ''];

function filterFalse(arr_two) {
    let positiveArr = arr_two.filter(true_meaning => true_meaning);
    
    console.log(positiveArr);
}

filterFalse(arr_two);
