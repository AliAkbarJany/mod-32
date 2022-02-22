/* function oddFriend(names) {
    console.log(names.length);
    var oddName = [];
    // var oddName = [''];
    for (var i = 0; i < names.length; i++) {
        if (names[i].length % 2 == 1) {
            oddName = names[i];
            // console.log(names[i]);
            // console.log(oddlength);
            return oddName;

        }
    }



}

var names = ['rafsan', 'morshad', 'sazzad', 'kajol'];
var finalresult = oddFriend(names);
console.log(finalresult); */

function oddFriend(names) {
    console.log(names.length);
    var arrayLength = [];
    // var oddName = [''];
    for (var i = 0; i < names.length; i++) {
        length = names[i].length;
        arrayLength.push(length);
    }
    return arrayLength;
}

const names = ['rafsan', 'morshad', 'sazzad', 'kajol'];
var finalresult = oddFriend(names);
console.log('result of normal function:', finalresult);


// arrow function==========

const lenghthOfArray = friend => friend.length;
let arrayLength = [];
for (var i = 0; i < names.length; i++) {
    // console.log(names.length);
    length = names[i];
    const result = lenghthOfArray(length);
    arrayLength.push(result);
}
console.log('result of arrow funtion::', arrayLength);



// mapping=====

// const myLength = names.map(lenghthOfArray);
// const myLength = names.map(friend => friend.length);
const myLength = names.map(x => x.length);
console.log('my length of array::', myLength);



const friends = ['tom hanks', 'tom cruise', 'tom hardy', 'nikolas alpha'];
const friendsLength = friends.map(x => x.length);
console.log('lenght of friends list:::', friendsLength);
