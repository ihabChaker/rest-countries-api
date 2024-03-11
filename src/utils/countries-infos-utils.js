export function flattenInfoArray(arr) {
    let result = ""
    for (const value of arr) {
        result += ", " + value
    }
    return result
}
export function flattenInfoObject(obj) {
    let result = ""
    for (const value of Object.values(obj)) {
        result += ", " + value
    }
    return result

}