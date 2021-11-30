let storeReport = require('./store_report.json')
const fs = require('fs')
let hour = 10
let minitues = 0
let newObj = {}
function renderJson(){
    for(let key in storeReport){
        if(minitues === 50){
           minitues = 0
           hour+=1
        }else{
           minitues += 10
        }
        let aa = minitues=== 0 ? `${hour}:0${minitues}`:`${hour}:${minitues}`
        
        newObj[aa] =storeReport[key]
   }
   fsWrite('aa.json',JSON.stringify(newObj))
}   
renderJson()
function fsWrite(path, content) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(path, content, {
        flag: 'a',
        encoding: "utf-8"
      }, function (err) {
        if (err) {
          //  console.log('写入内容出错')
          reject(err)
        } else {
          // console.log("写入内容成功")
          resolve(err)
        }
      })
    })
  }