function filter(source) {
    var result = [];

    for(var i = 0; i < source.length;i++){
        if (source[i]>4){
            result.push(source[i]);
        }
    }

    return result;

}
var array =[1,2,3,4,5,6,7,8];
var res = filter(array);
console.log(res.reverse());
