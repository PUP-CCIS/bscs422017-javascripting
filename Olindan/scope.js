var a = 1, b = 2, c = 3;
(function firstF(){
    var b =5, c = 6;
    (function secondF(){
        var b = 8;
        console.log("a: " + a + ", b: "+b+ ", c: " + c); //a1 b8 c6
       (function thirdF(){
           var a = 7, c = 9;
           (function fourthF(){
                var a = 1, c = 8;
           })();
        })();
    })();
})();