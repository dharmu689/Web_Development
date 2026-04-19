const arr = [2,3,5,8,1,"rohit", true];
// console.log(arr)
// console.log(arr[1]);
// console.log(arr.at(-2)); // at is ;atest, negative index le leta hai

// console.log(arr.length); //size of arr

// const newarr = arr;
// console.log(newarr);
// console.log(newarr == arr)

// const newarr1 = structuredClone(arr);
// console.log(newarr1 == arr)


//Pusjh, add element at end

// arr.push(50)
// arr.push(6)

// arr.push(9)

// console.log(arr)

// // pop, delete element at end
// arr.pop()
// arr.pop()
// console.log(arr)

//unshift, add element at first

// arr.unshift(10)
// console.log(arr)
// //shift, delete element at first

// arr.shift()

// console.log(arr)

// // delete operation
// delete arr[0]
// console.log(arr)

//slice
// console.log(arr)
// console.log(arr.slice(2,5))  //not change orginal array 
// console.log(arr)

//splice

// console.log(arr)
// console.log(arr.splice(2,5))   // splice(starting_index, total_element_delete, add_value)
// console.log(arr.splice(2,5,"dharmue","kumar",1))
// console.log(arr)    // change orginal array


// console.log(arr.toString())  //array conver to string
// console.log(arr.join(" "))  // also convert to string but , ke jagah kuch v change kr stke hai


//concat

// let arr1 = [1,5,6,8,]
// let arr2 = [6,8,5,7,9,2]

// // let arr3 = arr1.concat(arr2) //marge array but ek hi array me marge karega

// arr1.push(arr2) // marge array but 2d array me marge karega (array 1 ke under hi array 2 ko daal dega)
// console.log(arr1)

//2d array
// let arr2d = [[1,2,3],[4,5,6],[7,8,9]]

// console.log(arr2d)
// let mewarr = arr2d.flat(Infinity) // 2d array convert to 1d array. aur infinity ka use esliye bhi krte h jb 3d,4d even koi bhi diminisonal aaray ho usko 1d array me convert dega 

let abc = [2,3,4,5,6,1,9]
console.log(Array.isArray(abc)) // check array jo backend se aata hai data array formate me
