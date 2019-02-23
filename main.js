// Coding (level 1)
// 11. Write a program to calculate the sum of array of integers.
function calSumArr(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

// 2. Write a program to calculate the Nth number of the Fibonacci series.
function calNthFibonacci(n) {
  if (n < 2) {
    return n
  } else {
    return calNthFibonacci(n - 1) + calNthFibonacci(n - 2)
  }
}

// Coding(level 2) - Input
// Find all criteria where their name contain a given string.
// • The result should be grouped by standard
// https://xbot.com.vn/test/standards.json
let dataReturn1 = []
function findDataByName(str) {
  let id = 0
  async function getData() {
    let response = await fetch('https://xbot.com.vn/test/standards.json');
    let data = await response.json()
    return data;
  }
  var dataReturn = []
  getData()
    .then(
      function findDataByName(data) {
        for (let i = 0; i < data.length; i++) {
          let criterias = data[i].criteria
          for (let k = 0; k < criterias.length; k++) {
            let criteriaName = criterias[k].name.toUpperCase()
            if (criteriaName.indexOf(str.toUpperCase()) > -1) {
              dataReturn.push(data[i])
            }
          }
        }
        return dataReturn
      }
    )
  return dataReturn
}
let dataOut = findDataByName('phương hướng')
