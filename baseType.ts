var myname : string = 'kkk'
var uname:number;
var anyname = 'jjj';
var anma;
var sum = uname + anma;

var str = '1';
var str2:number = <number> <any> str
console.log(str2)


var any:any = 'dddd';
var num:number = 0o744;
let names:string = "run";
let years:number = 5;
let words:string = `您好，今年是${names}发布${years + 1}周年`;

let flag:boolean = true;

let arr1:number[] = [1,2];
let arr2:Array<number> = [1,2];

let x:[string,number];
x = ['r',1];
console.log(x[0]);

enum Color {red,blue,green};
let c:Color = Color.blue;
console.log(c)

function hello():void {
  alert('hello you');
}