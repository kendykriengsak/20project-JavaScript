const progressElement = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    // pageHeight : ขนาดความสูงของหน้าเว็บเพจ
    // scrollHeight : ความสูงรวมสกรอบาร์
    // clientHeight : ความสูงไม่รวมสกรอบาร์
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    // scrollTop : สกรอบาร์
    const scrollTop = document.documentElement.scrollTop
    // scrollTop/pageHeight จะได้ช่วง 0-1 ที่เป็นทศนิยม *100 เพื่อปรับเป็น 100%
    const scrollPersentage = (scrollTop/pageHeight)*100
    // ดักจับว่าเรา สกรอดูเว็บจากบนลงล่างกี่%
    console.log(scrollPersentage+"%")
    // กำหนดค่า .scroll-indicator ที่ตั้งไว้เป็น visibility มาเป็น visible คือเห็นมัน!
    progressElement.style.visibility = "visible"
    // และกำหนดค่าความกว้างของ progressbar = scrollPersentage+ ตัวstring ที่กำหนดไว้เป็น % ไม่งั้นก็ไม่เห็น
    progressElement.style.width = scrollPersentage+"%"
}