var myString: string;
var myNum: number;
var myBool: boolean;
var myAny: any;

var strArr1: string[];
var numArr1: number[];
var boolArr1: boolean[];

var strArr2: Array<string>;
var numArr2: Array<number>;
var boolArr2: Array<boolean>;

var strNumTuple: [string, number];

var myVoid1: void = null;
var myVoid2: void = undefined;
var myNull: null = null;
var myUndefined: undefined = undefined;

myString = "Hello";
myNum = 22;
myBool = true;
myAny = "5";

strArr1 = ["Hello", "World"];
numArr1 = [1, 2];
boolArr1 = [true, false];

strArr2 = ["Hello", "World"];
numArr2 = [1, 2];
boolArr2 = [true, false];

strNumTuple = ["Hello", 11111];

console.log(
    myString, 
    myNum, 
    myBool, 
    myAny, 
    strArr1, 
    numArr1, 
    boolArr1,
    strArr2, 
    numArr2, 
    boolArr2,
    strNumTuple,
    myVoid1,
    myVoid2,
    myNull,
    myUndefined,
);