module.exports = function reverse (n) {
    if(n > 0){
        return Array.from(n.toString())
        .reverse()
        .join('')
    } else if (n < 0){
        let result =  Array.from(n.toString())
        .splice(1)
        .reverse()
        .join('')
        return result;
    }
    
}
