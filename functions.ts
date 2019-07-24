var addNums = function(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addNums(1, 2));

var mySum = function(num1: any, num2: any): number {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }

    return num1 + num2;
}

console.log(mySum("1", "3"));

var getName = function(fName: string, lName?: string): string {
    if (lName === undefined) {
        return fName;
    }
    else {
        return `${fName} ${lName}`;
    }
}

console.log(getName("John", "Doe"));
console.log(getName("John"));

var voidFunc = function(): void {
    console.log("Void");
}

voidFunc();