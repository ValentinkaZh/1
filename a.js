function filter(source, fn) {
    var result = [];

    for(var i = 0; i < source.length;i++){
        if (fn(source[i])){
            result.push(source[i]);
        }
    }

    return result;
}
function greaterThan4(value) {
    return value > 4;
}
var array =[1,2,8,7,10];
var res = filter(array,greaterThan4);
console.info(res);
/*функция котора отсортировывает массив и выводит значения его больше 4*/