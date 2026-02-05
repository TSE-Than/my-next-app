//rfc
export default async function Blogpage() {
  // 2. จำลองการโหลดข้อมูล (หน่วงเวลา 3 วินาที)
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  // 3. จำลอง Error
  //throw new Error("ไม่สามารถโหลดบทความได้");
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-900">บทความ</h1>
      <p className="mt-4">ยินดีต้อบรับสู่หน้า Blog</p>
    </div>
  )
}