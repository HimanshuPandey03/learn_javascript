// const coding = ["js", "ruby", "java", "python", "cpp", "c"]

// const values = coding.forEach( (item) => {
//   //console.log(item);
//   return item //forEach value return nhi karta
// } )

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//   //num > 5
//   return num > 5
// })

//const newNums = []
// myNums.forEach( (num) => {
//   if (num > 5) {
//     newNums.push(num)
//   }
// } )
//console.log(newNums);

//example filter

const books = [
  {
    title: 'Book One', 
    genre: 'Fiction', 
    publish: 1981, 
    edition: 2004
  },
   {
    title: 'Book Two', 
    genre: 'Non-Fiction', 
    publish: 1992, 
    edition: 2008
  },
   {
    title: 'Book Three', 
    genre: 'History', 
    publish: 1999, 
    edition: 2007
  },
   {
    title: 'Book Four', 
    genre: 'Non-Fiction', 
    publish: 1989, 
    edition: 2010
  },
   {
    title: 'Book Five', 
    genre: 'Science', 
    publish: 2009, 
    edition: 2014
  },
   {
    title: 'Book Six', 
    genre: 'Fiction', 
    publish: 1987, 
    edition: 2010
  },
   {
    title: 'Book Seven', 
    genre: 'History', 
    publish: 1986, 
    edition: 1996
  },
   {
    title: 'Book Eight', 
    genre: 'Science', 
    publish: 2011, 
    edition: 2016
  },
   {
    title: 'Book Nine', 
    genre: 'Non-Fiction', 
    publish: 1981, 
    edition: 1989
  },
];

//const userBooks = books.filter( (bk) => bk.genre === 'History')

//const userBooks = books.filter( (bk) =>  bk.publish >= 2000)

//const userBooks = books.filter( (bk) => {return bk.publish >= 2000})

const userBooks = books.filter( (bk) => {
  return bk.publish >= 1995 && bk.genre === 'History'
})
//console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newData = myNumbers.map( (num) => num + 10)
//const newData = myNumbers.map( (num) => {return num + 10})
const newNums = myNumbers
                  .map( (num) => num * 10)
                  .map( (num) => num + 1)
                  .filter( (num) => num >= 40)
//console.log(newNums);

// Reduce in js

const myNums1 = [1, 2, 3]

// const myTotal = myNums1.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0)

const myTotal = myNums1.reduce( (acc, curr) => acc + curr, 0 )

//console.log(myTotal);

// note: acc -> accumulator, currval -> currentValue, 0 -> initialValue
//Exmaple 

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  }, 
  {
    itemName: "python course",
    price: 999
  },
  {
    itemName: "data science",
    price: 12999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);