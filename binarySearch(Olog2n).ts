// setup
let arr: number[] = []

for (let i: number = 0; i <= 100; i++) {
    arr.push(Math.floor(Math.random() * 100))
}

arr.sort((a, b) => a - b)

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
            console.log(`the element you are looking for is in the position ${i}`)
            return i
        }
    }

    console.log('there is no such element in the array')
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
console.time('for search')
forSearch(arr, 4)
console.timeEnd('for search')

console.time('forEach search')
forEachSearch(arr, 4)
console.timeEnd('forEach search')

console.time('Binary search')
binarySearch(arr, 4)
console.timeEnd('Binary search')