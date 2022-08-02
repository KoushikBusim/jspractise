// const sum = () => 2+3

// console.log(`sum of 5,4 is ${sum(5,4)}`)

// let a = ['abc','cdef', 'hijk', 'abc', 'bvjn']
// a.forEach(function (ele, ind, arr) {
//     console.log(ele, ind, arr)
// })

// for (let i of a){
//     console.log(i)
// }

// console.log(a.lastIndexOf('abc'))

// console.log(a.includes('abc'))

// let b = [10,20,30,40,50,55,67,85,88,66]

// const findElm = b.findIndex((c)=>c<400)
// console.log(findElm)

// const highthan40 = b.filter((el,index)=>el<40)

// console.log(highthan40, b)

// const months = ['March', 'May','August','April', 'October', 'Febraury']
// console.log(months.sort())

// sort method first converts given elements into strings and then sort them according to the sequence of UTF-16 code units values.
// sorting numerical array will give wrong results.
// sorting method takes in an optional argument, an function for overriding the default sorting logic


// const nums = [1,20,1,99,105,5,23,1.5,-2,100000]

// const ascendingcomparisionlogic = (a,b) => (a>b)?-1:((a==b)?0:1)

// console.log(nums.sort(ascendingcomparisionlogic).reverse())

// let b = [10,20,30,40,50,55,67,85,88,66]

// console.log(b.length, b.push(5,7), b)
// console.log(b.length, b.unshift(15,22,63), b)


// const months = ['Jan', 'March', 'April', 'June', 'June'];
// // splice(start index, delete len, args..)
// months.splice(1,0,'Feb')

// let indexofapril = months.indexOf('April')

// months.splice(3,1,'april')
// console.log(months)

// let first2months = months.slice(0,2)
// console.log(first2months)

// foreach vs Map
// map and foreach both run traverse a given array and execute a provided function.
// but map returns an array with all the results of these functions


// let a = [1,2,2,3,4]

// console.log(a.map(
//     (k,i,arr) => k%2?true:false
//     ))

// let a = ['abc','cdef', 'hijk', 'abc', 'bvjn']
// a.forEach(function (ele) {
//     console.log(ele)
// })

// let arr = [2,3,4,5,6,7,8]
// console.log(
//     arr.map(l => l*2)
//     .filter((l)=>l<10)
//     .reduce((prev, curr)=>prev+curr)
// )


// const arr = [[1,2],[3,4],[5,6]]
// console.log(
//     arr.reduce((prev, curr, currInd, arr)=>{
//         return prev.concat(curr) 
//     },[])
// )


let n = `I am learning Reactjs learning`
console.log(n.indexOf('learn',6))