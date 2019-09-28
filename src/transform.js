/*

1. You must create a module named transform that exports a function named groupAdultsByAgeRange. The test imports it like this:
const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange
Note: This is a named export

2. The exported groupAdultsByAgeRange should be a function.

3. The function will be called with an array of objects as its argument.
The objects represent people, with a property name and a property age.
Your function should group each person over the age of 18 into age ranges. Here are a few examples:

// Example 1
groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 20}])
// Should result in:
const result = { '20 and younger': [ { name: 'John', age: 20 } ] }

// Example 2
groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}])
// Should result in:
const result2 = { 
  '31-40': [ { name: 'Anna', age: 31 }, { name: 'John', age: 32 } ],
  '51 and older': [ { name: 'Hank', age: 60 } ] 
}

4. Notice that the groups are only added to the resulting object if they are not empty. Make sure your function does the same.

5. You should use a combination of filter and reduce. If your solution uses for-loops instead of reduce for creating the final object,
you will receive partial points. The use of for-loops is allowed, but try to construct the returned "grouping" object using reduce.

6. These are the groups that your code needs to return. Use the text as the name of the property:

These are the groups that your code needs to return. Use the text as the name of the property:
20 and younger
21-30
31-40
41-50
51 and older

*/

// console.log('Hello assignment 2!');



function groupAdultsByAgeRange(people) {
    // console.log('What does the function paramenter contain? > ', people);

    // 20 and younger
    const twentyAndYounger = people.filter(function (properties) {
        return properties.age >= 18 && properties.age <= 20
    });
    // console.log('20 and younger > ', twentyAndYounger);
    
    // 21-30
    const twentyOneToThirty = people.filter(function (properties) {
        return properties.age >= 21 && properties.age <= 30
    });
    // console.log('21-30 > ', twentyOneToThirty);
    
    // 31-40
    const thirtyOneToForty = people.filter(function (properties) {
        return properties.age >= 31 && properties.age <= 40
    });
    // console.log('31-40 > ', thirtyOneToForty);
    
    // 41-50
    const fortyOneToFifty = people.filter(function (properties) {
        return properties.age >= 41 && properties.age <= 50
    });
    // console.log('41-50 > ', fortyOneToFifty);
    
    // 51 and older
    const fiftyOneAndOlder = people.filter(function (properties) {
        return properties.age >= 51
    });
    // console.log('51 and older > ', fiftyOneAndOlder);

    // console.log(twentyAndYounger);
    
    // const arrayWitthObjects = []



    // console.log(twentyAndYounger);
    

    // var arrayWitthObjects5 = []
    // var obj = {};
    // obj['20 and younger'] = twentyAndYounger;
    // obj['21-30'] = twentyOneToThirty;
    // obj['31-40'] = thirtyOneToForty
    // obj['41-50'] = fortyOneToFifty;
    // obj['51 and older'] = fiftyOneAndOlder
    // arrayWitthObjects5.push(obj);


    // var nieto = ["Title", "Ramones", "Title", "Ramesses"]
    // var arrayWitthObjects2 = []
    // var obj = {};
    // obj["01"] = nieto[0];
    // obj["02"] = nieto[1];
    // obj["03"] = nieto[2];
    // obj["04"] = nieto[3];
    // arrayWitthObjects2.push(obj);

    // console.log(arrayWitthObjects5);

    

    // console.log('twentyAndYounger > ', twentyAndYounger);
    
    // if (twentyAndYounger === undefined || array.length == 0) {
    //     // array empty or does not exist
    // }

    const arrayWitthObjects = []
    arrayWitthObjects.push({
        '20 and younger': twentyAndYounger,
        '21-30': twentyOneToThirty,
        '31-40': thirtyOneToForty,
        '41-50': fortyOneToFifty,
        '51 and older': fiftyOneAndOlder
        
    })
    // if (twentyAndYounger === undefined || twentyAndYounger.length == 0) {
        
    //     console.log('Bulshit > ', arrayWitthObjects);

    //     // var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    //     // var citrus = fruits.slice(1, 3);
    //     // delete arrayWitthObjects['20 and younger'];

    //     arrayWitthObjects[Object.keys(arrayWitthObjects)[0]]; //returns 'someVal'
        
    //     console.log(arrayWitthObjects);
        
    // }

    // arrayWitthObjects.map(function(item) {
    //     console.log(item);
        
    //     delete item['20 and younger'];
    //     // console.log('First', item);
    //     return item; 
    // });

    // console.log('First', item);
    

    
    const initialValue = {}
    const values = arrayWitthObjects
    // console.log(arrayWitthObjects);
    
    let result = values.reduce((accumulator, currentValue) => {
        // console.log('accumulator > ', accumulator);
        // console.log('currentValue > ', currentValue);

        // if (currentValue === undefined || currentValue.length == 0) {
        //     console.log('Bulshit');
            
        // }
               
        
        // const solved = accumulator + currentValue
        // return console.log(currentValue);
        // return accumulator + currentValue
        return console.log(currentValue);
    }, initialValue)

    // let array222 = []

    // let result2 = array222.push(arrayWitthObjects.reduce((a,b,i)=> {
    //     if (arg[i] !== null) a[b]=arg[i];
    //     return a;
    // }, {}))

    // console.log(a);
    

    // console.log(result);
    
    // return totalObjects

    // return result

    // if (twentyAndYounger === undefined || twentyAndYounger.length == 0) {
    //     console.log('Empty twentyAndYounger!');
    //     delete result['20 and younger'];

 
        
        
    // }
    // console.log('Second result', result);
    

    // delete person.age;
    return result;
}


// // Example
// groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}])
// // Should result in:
const result2 = {
  '31-40': [ { name: 'Anna', age: 31 }, { name: 'John', age: 32 } ],
  '51 and older': [ { name: 'Hank', age: 60 } ] 
}



// groupAdultsByAgeRange([
//     { name: "pete", age: 10 },
//     { name: "dove", age: 17 },
//     { name: "dave", age: 18 },
//     { name: "hall", age: 19 },
//     { name: "donn", age: 20 },
//     { name: "trey", age: 21 },
//     { name: "hann", age: 29 },
//     { name: "chew", age: 30 },
//     { name: "cloe", age: 31 },
//     { name: "dart", age: 39 },
//     { name: "this", age: 40 },
//     { name: "dame", age: 41 },
//     { name: "henk", age: 49 },
//     { name: "anna", age: 50 },
//     { name: "olga", age: 51 },
//     { name: "bert", age: 52 },
//     { name: "oldd", age: 120 },
// ])

// groupAdultsByAgeRange([])

// const result = {
//     '20 and younger':
//     [{ name: 'dave', age: 18 },
//     { name: 'hall', age: 19 },
//     { name: 'donn', age: 20 }],
//     '21-30':
//     [{ name: 'trey', age: 21 },
//     { name: 'hann', age: 29 },
//     { name: 'chew', age: 30 }],
//     '31-40':
//     [{ name: 'cloe', age: 31 },
//     { name: 'dart', age: 39 },
//     { name: 'this', age: 40 }],
//     '41-50':
//     [{ name: 'dame', age: 41 },
//     { name: 'henk', age: 49 },
//     { name: 'anna', age: 50 }],
//     '51 and older':
//     [{ name: 'olga', age: 51 },
//     { name: 'bert', age: 52 },
//     { name: 'oldd', age: 120 }]
// }




module.exports = {
    groupAdultsByAgeRange
}