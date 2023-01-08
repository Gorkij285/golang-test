function calculator(string) {
  let err = new Error('ошибка')
  let mas = []
  mas = string.split(/[ ]/)
  console.log(mas)
  if(mas.length!==3) throw err // ПРОВЕРКА НА ОШИБКИ
  if(mas[1] == '%') throw err // ПРОВЕРКА НА ОШИБКИ

  let otvet
  let one = mas[0]
  let two = mas[2]
    if(one < 1 || one > 10) throw err  // ПРОВЕРКА НА ОШИБКИ
    if(two < 1 || two > 10) throw err  // ПРОВЕРКА НА ОШИБКИ
  let oneRom = romain2arabic(one)
  let twoRom = romain2arabic(two)
      if(mas[0] > 0 && mas[2] > 0){
      if((one || two !==0) && (one || two <= 10)){
      if(mas[1] == "+"){
        let o = +one + +two +''
        return o
        } else if(mas[1] == "-"){
          let o = +one - +two +''
          return o
        } else if(mas[1] == "*"){
          let o = +one * +two +''
          return o
        } else if(mas[1] == "/"){
          let o = +one / +two 
          o = Math.floor(o) +''
          return o
        }} 
      } else{
        if(oneRom < 1 || oneRom > 10) throw err // ПРОВЕРКА НА ОШИБКИ
        if(twoRom < 1 || twoRom > 10) throw err // ПРОВЕРКА НА ОШИБКИ
        if (mas[1] == "+"){
          let o = +oneRom + +twoRom 
          o = convert(o) +''
          return o
      }else if(mas[1] == "-"){
        let o = +oneRom - +twoRom 
        if(o<=0) return ""
        o = convert(o) +''
        return o
      } else if(mas[1] == "*"){
        let o = +oneRom * +twoRom 
        o = convert(o) +''
        return o
      } else if(mas[1] == "/"){
        let o = +oneRom / +twoRom
        o = Math.floor(o)
        o = convert(o) +''
        o+=''
        return o
      }

      }
  // ПЕРЕВОД СВИСНУЛ (В ТЗ НАПИСАНО ЧТО МОЖНО)
  function romain2arabic(string) {
    let arrSimvol = string.split(/[+*\/-]/g)
    
    let arrNum = []
    for (let i = 0; i < arrSimvol.length; i++) {
      let res = 0
      arrSimvol[i].replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(i) {
        res += {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, III:3, II:2, I:1}[i]
      })
    
      arrNum.push(res)
      
    }
    return arrNum
    }
    function convert(num) {
      var c=[
            ['',"I","II","III","IV","V","VI","VII","VIII","IX"],
            ['',"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
            ['',"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
            ['',"M","MM","MMM"]
            ];
      // JavaScript% / Расчет имеет десятичные дроби, вам нужно использовать Math.floor для округления в меньшую сторону
      return c[3][Math.floor(num / 1000 % 10)]+c[2][Math.floor(num / 100 % 10)]+c[1][Math.floor(num / 10 % 10)]+c[0][Math.floor(num % 10)];
     }
  
}