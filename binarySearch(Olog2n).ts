// setup
let arr: number[] = []

for (let i: number = 0; i <= 100; i++) {
    arr.push(Math.floor(Math.random() * 100))
}

arr.sort((a, b) => a - b)

interface BinarySearchFn {
    (
        arr: number[],
        item: number
    ): number | null
}

// algorithm
const binarySearch: BinarySearchFn = (arr, item) => {
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
