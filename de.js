var num = 3;
var goo = 'goo';
console.log(num);
console.log(goo);
/*
1


*/
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('Runoob');
    };
    return Site;
}());
var obj = new Site();
obj.name();
