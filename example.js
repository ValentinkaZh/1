function calc(count1, count2) {
    for (var i = 1; i <= count1; i++){
        var arr = [];
        for(var j = 1; j <= count2; j++){
            arr.push(i * j);
        }
        console.log(arr);
    }
}

calc(4, 10);