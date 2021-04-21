const numbers = [1, 3, 5, 7, 9, 11, 13, 15];

  function currentSums(numbers) {
    let result = [];
    let intermediaSum = numbers.reduce(function(sum, item) {
      result.push(sum);
      return sum + item;
    });

    result.push(intermediaSum);
  
    console.log(result);
  };

  currentSums(numbers);
