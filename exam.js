// מקבל מערך מספרים ומחזיר מערך מספרים המכיל רק זוגיים
function Mission1 (arr){
    let newArr = arr.filter((num)=> {return num % 2 === 0})
    return newArr
}

// הופך מערך דן מימדי ךחד מימדי
function Mission3 (arr){    
    return arr.flat()
}

// מקבל שני מערכים ומחזיר הראשון של מפתחות השני של ערכים ןמחזיר אובייקט המוכב משניהם
function Mission5 (keys, values){
    let lwo = keys.length > values.length ?  values.length : keys.length
    
    let obj = {}
    for(let i = 0; i < lwo ; i ++){
        obj[keys[i]] = values[i]
    }
    return obj
}

//מקבל סטרינג ומחזיר את כמות המילים המכילות 4 אותיות
function Mission2 (str){
    let arr = str.split(" ")
    let numWords = arr.filter((num)=> {return num.length === 4})
    return numWords.length
}


module.exports = {
    Mission1,
    Mission3,
    Mission5,
    Mission2
}