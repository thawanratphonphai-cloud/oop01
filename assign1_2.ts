let bookTitle: string = "TypeScript เบื้องต้น";
let isbn: string = "978-616-1234-56-7";
let price: number = 550;

let bookSummary: [string, number] = [bookTitle, price];

let isAvailable: boolean = true;

let promotionalPrice: number = price * (1 - 0.15);

let isPremium: boolean = price > 500;

let canDisplay: boolean = isPremium && (isAvailable === true);

console.log(`====================================`);
console.log(`        ระบบจัดการข้อมูลหนังสือ         `);
console.log(`====================================`);
console.log(`ข้อมูลจาก Tuple (ชื่อหนังสือ, ราคา): ${bookSummary[0]} (ราคา ${bookSummary[1]} บาท)`);
console.log(`รหัส ISBN: ${isbn}`);
console.log(`ราคาปกติ: ${price} บาท`);
console.log(`ราคาโปรโมชัน (ลด 15%): ${promotionalPrice.toFixed(2)} บาท`);
console.log(`เป็นหนังสือ Premium ใช่หรือไม่: ${isPremium}`);
console.log(`สามารถจัดแสดงที่หน้าตู้โชว์ได้: ${canDisplay ? "สามารถจัดแสดงที่หน้าตู้โชว์ได้" : "ไม่สามารถจัดแสดงได้"}`);
console.log(`====================================`);