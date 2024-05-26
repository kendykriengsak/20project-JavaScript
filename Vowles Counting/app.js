const countEl = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    // จำนวนคำที่ถูกป้อนลงในช่อง (ปรับให้เป็นตัวเล็กทั้งหมด)
    let word = input.value.toLowerCase()
    console.log(word) //เช็คว่าในช่องถูกใส่ข้อความไปแล้วเท่าไหร่?
    let vowelCount = 0
    // ในช่อง i ถูกพิมพ์คำว่า kendy จะถูกดึงมานับจำนวนในตัวแปร letter (word=คำ) (letter=ตัวอักษร)
    for(let i = 0;i<word.length;i++){
        let letter = word[i]
        // ถ้า letter ที่ดึงมาแล้ว ตรงกับสระ AEIOU ที่เราได้ใส่ไว้ จะถูกนับค่าโดยvowelCount++
        if(letter.match(/([a,e,i,o,u])/)){
            vowelCount++
        }
    }
    countEl.innerHTML=`${vowelCount}`
})