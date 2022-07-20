
//Excercise 1: Return The First Element In Array.
var arr = new Array();

function getFirstValue(arr){
    console.log(arr[0]);
    return arr[0];
}

getFirstValue([1, 2, 3]); //output: 1
getFirstValue([80, 5, 100]); //output: 80
getFirstValue([-500, 0 ,50]); //output: -500



//Excercise 2: Drop the First Element Of An Arra
var arr1 = [1, 2, 3];

function drop(arr, num){
    console.log(arr1.slice(num))
    return arr1.slice(num);
}
drop(arr1,0);



//Excercise 3: Concatenate Variable number Of Input Arrays 
var arrByPerson = prompt("Enter you Array: ");

function concatArr(...arr){
 return [arr.reduce((arr1, length) => arr1.concat(length))];
}

concatArr([1, 2, 3], [4, 5], [6,7]); 



//Excercise 4: Array Of Multiples

//numbers For Known Input
var firstNum = 7;
var secondNum = 12;
var thirdNum = 17;

var arr = new Array();
let multipleLength = prompt("Enter How Many Times You Want To Multiple: ")

function arrayOfMultiples(firstNum, numLength){
  for (let index = firstNum; index <= firstNum * numLength; index+=firstNum) {
    arr.push(index);
    
  }
  console.log(arr);
}

arrayOfMultiples(secondNum,multipleLength);



//Excercise 5: Seven boom!
var arrNum = Array();
 
function sevenBoom(arrNum){
    for (let index = 0; index < arrNum.length; index++) {
        if(arrNum.toString()[index].includes('7')){
            console.log("Boom!")
        }
        else{
            console.log("there Is no 7 Is this Array!")
        }   
    }
}

sevenBoom([1,72,3,4,5,6,7]);



//Excercise 6: Length Of Nested Array
var counter = 0;
var innerCounter = 0;

function getLength(arr){
    for (let i = 0; i < arr.length; i++) {
        counter = arr.toString();
        innerCounter = counter.split(",")
        
     }
     console.log(innerCounter.length);
}

getLength([1, [2, 3]]);
getLength([1, [2, [3, 4]]]);
getLength([1, [2, [3, [4, [5, 6]]]]]);



//Excercise 7: I Made A Mistake
var sentence = "";

function getValue(str){
    sentence = str.toString();
    if(sentence.length == 0 ){
        console.log("What... Why Did You Make This?")
    }
    else{
     console.log(sentence);
    }
}

getValue([[[[[[["Bazinga"]]]]]]]);
getValue([[[[[[[[["God, What Is Happening?"]]]]]]]]]);
getValue[[[[[[[[]]]]]]]];



//Excercise 8: Mutations Only: zeroes to The End
function zeroesToEnd(arr){
    var newArr = [];
    var zeroes = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == 0){
            zeroes.push(0)
        }
        else{
            newArr.push(arr[index])
        }

    }
    console.log(newArr.concat(zeroes))
}

zeroesToEnd([1, 2, 0, 0, 4, 0, 5]);
zeroesToEnd([0, 0, 2, 0, 5]);
zeroesToEnd([4, 4, 5]);
zeroesToEnd([0, 0]);



//Excercise 9: Fill An Array With New Values
function fill(arr, value, startNum, endNum){
    for (var i = 0; i < arr.length; i++) {
        if(i >= startNum && i < endNum){
            arr[i] = value;
            console.log("Value Changed To: " + value + " ,At Index Of: " + i)
        }
    }
    console.log("Array After Changing: " + "\n" + arr)
}

fill([1,2,3,4,5], '*', 1, 3);



//Excercise 10: Challenge: Build A Diamond Machine (not finished)
/*

function Diamond(num){
    for (var i = 0; i < (num.length - 1) / 2; i--) {
    if(num[0] == 1){
        for (var j = 1; j < (num.length - 1) / 2; j++) {
            console.log(num[j] = 1)
            if(num[j] != 1){
                num[j] = 0;
            }
            
        }
    }
    else{
        if(num[i] + ((num.length - 1) / 2) == 1){
            console.log(num[i] = 1);
        }
        else{
            console.log(num[i] = 0);
        }
    }
    }
}
Diamond(11);

*/