let productName:string ="notebook";
let pricePerUnit:number ="20000";
let quantity:number = 2;
let isMember:boolean ="false";

let totalPrice: number =pricePerUnit*quantity;

let discount: number =0;
let hasDiscount: boolean = (totalPrice>15000)||isMember;

if (hasDiscount){
    discount = totalPrice * 0.10;
}

let finalPrice: number = totalPrice - discount;

console.log(`--------------------`);
console.log(`รายงานสรุปผลการซื้อสินค้า`);
console.log(`--------------------`);
console.log(`ชื่อสินค้าและจำนวนที่ซื้อ: ${productName} จำนวน ${quantity}ชิ้น`);
console.log(`ราคารวมทั้งหมด: ${totalPrice}บาท`);
console.log(`ระบุว่าได้รับส่วนลดหรือไม่: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice}บาท`);
console.log(`--------------------`);