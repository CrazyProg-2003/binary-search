function binary_search (list, item) {
    let low = 0
    let high = list[list.length - 1]

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = list[mid]
        if (guess == item) {
            return `элемент масссива находится на ${mid + 1} позиции`
        } 
        else if (guess > item) 
            high = mid - 1
        else low = mid + 1
    }
    return null
}

let arr = [1, 3, 5, 7, 9]

binary_search (arr, 1)
