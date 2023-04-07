// setup
let arr100El: number[] = []

// random array
// for (let i: number = 0; i <= 100; i++) {
//     arr100El.push(Math.floor(Math.random() * 100))
// }

// ordered array
for (let i: number = 0; i <= 100; i++) {
    arr100El.push(i)
}

let arr1e7El: number[] = []

// random array
// for (let i: number = 0; i <= 1e7; i++) {
//     arr1e7El.push(Math.floor(Math.random() * 100))
// }

// ordered array
for (let i: number = 0; i <= 1e7; i++) {
    arr1e7El.push(i)
}

arr100El.sort((a, b) => a - b)
arr1e7El.sort((a, b) => a - b)

interface SearchElementFn {
    (
        arr: number[],
        item: number
    ): number | null
}

// algorithm
const binarySearch: SearchElementFn = (arr, item) => {
    let low: number = 0
    let high: number = arr[arr.length - 1]

    while (low <= high) {
        const mid: number = Math.floor((low + high) / 2)
        const guess: number = arr[mid]

        if (guess == item) {
            return mid
        }
        if (guess > item) {
            high = mid - 1
        } else low = mid + 1
    }

    return null
}

// сomparison setup
const forSearch: SearchElementFn = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            console.log('\x1b[42m%s\x1b[0m', `the element you are looking for is in the position ${i}`)
            return i
        }
    }

    console.log('\x1b[41m\x1b[1m\x1b[37m%s\x1b[0m', 'there is no such element in the array')
    return null
}

const forEachSearch: SearchElementFn = (arr, item) => {
    arr.forEach((el, i) => {
        if (el === item) {
            return i
        }
    })

    return null
}

// actually comparsion
console.log('\x1b[34m%s\x1b[0m', 'comparsion for 100 elements')
console.time('for search 100 elements')
forSearch(arr100El, 4)
console.timeEnd('for search 100 elements')

console.time('forEach search 100 elements')
forEachSearch(arr100El, 4)
console.timeEnd('forEach search 100 elements')

console.time('Binary search 100 elements')
binarySearch(arr100El, 4)
console.timeEnd('Binary search 100 elements')


console.log('\x1b[34m%s\x1b[0m', 'comparsion for 10 million elements')
console.time('for search 1e7 elements')
forSearch(arr1e7El, 1e5)
console.timeEnd('for search 1e7 elements')

console.time('forEach search 1e7 elements')
forEachSearch(arr1e7El, 1e5)
console.timeEnd('forEach search 1e7 elements')

console.time('Binary search 1e7 elements')
binarySearch(arr1e7El, 1e5)
console.timeEnd('Binary search 1e7 elements')