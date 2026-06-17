let Gross: number = 50000;
let Tax: number = 7;
let Paid:number =(Gross*Tax)/100;
let Income:number =(Gross-Paid);

console.log("---Tax calculation Report---");
console.log("Gross Income:",Gross);
console.log("Tax Rate:",Tax,"%");
console.log("Tax Paid:$",Paid);
console.log("Net Income after Tax:$",Income);
console.log("------------------------------");