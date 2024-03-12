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
export function transformCurrenciesObjectToString(currencies) {
    if (Object.values(currencies).length == 0) return ""
    let result = ""
    for (let val of Object.values(currencies)) {
        result += ', ' + val["name"]
    }
    return result.substring(2)
}
export function transformLanguagesObjectToString(languages) {
    if (Object.values(languages).length == 0) return ""
    let result = ""
    for (let val of Object.values(languages)) {
        result += ', ' + val
    }
    return result.substring(2)
}
export function transformCapitalsArrayToString(capitals) {
    if (capitals.length == 0) return ""
    else if (capitals.length == 1) return capitals[0]
    let result = ""
    for (let val of capitals) {
        result += ', ' + val
    }
    return result.substring(2)
}