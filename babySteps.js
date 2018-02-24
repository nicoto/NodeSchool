var sum = 0;
var numbers = process.argv;

function add(array){
  const skip2start = 2;
  for (var index = skip2start; index < array.length; index+=1) {
    sum += Number(array[index]);
  };
  console.log(sum);
  return sum;
}

add(numbers);
