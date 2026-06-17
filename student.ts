let fname: string = "Thawanrat";
let lname: string = "phonphai";
let course: string[] =["Database","OOP","Web"];
let mark: number[] =[80,76,65];
let pass: boolean = true;

console.log("hello %s %s ",fname,lname);
console.log("ลงทะเบียนเรียนวิชา",course);
console.log("ได้คะแนน",mark);
console.log("คุณสอบผ่าน",pass);

console.log("วิชา %s คุณสอบได้ %d คะแนน",course[0],mark[0]);

let mark1: number=76;
let mark2: number=80;
let mark3: number=65;

let total: number=mark1+mark2+mark3;
console.log("คะแนนรวม",total);

let average: number=total/3;
console.log("ผลเฉลี่ย",average);