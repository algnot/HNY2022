var pincode = '';
var dot1 = document.getElementById('dot1')
var dot2 = document.getElementById('dot2')
var dot3 = document.getElementById('dot3')
var dot4 = document.getElementById('dot4')

function onClickBtn (e) {
    if(pincode.length == 0 && e == -1) return
    if(pincode.length == 4 && e != -1) return
    if(pincode.length > 0 && e == -1){
        pincode = pincode.substring(0, pincode.length - 1);
    } else {
        pincode = pincode.concat('',e)
    }
    displayDot()
    if(pincode.length == 4) getNewYear()
}

function displayDot(){
    if(pincode.length == 0){
        dot1.style.background = '#ffe4ba'
        dot2.style.background = '#ffe4ba'
        dot3.style.background = '#ffe4ba'
        dot4.style.background = '#ffe4ba'
    }
    if(pincode.length == 1){
        dot1.style.background = '#ff6262'
        dot2.style.background = '#ffe4ba'
        dot3.style.background = '#ffe4ba'
        dot4.style.background = '#ffe4ba'
    }
    if(pincode.length == 2){
        dot1.style.background = '#ff6262'
        dot2.style.background = '#ff6262'
        dot3.style.background = '#ffe4ba'
        dot4.style.background = '#ffe4ba'
    }
    if(pincode.length == 3){
        dot1.style.background = '#ff6262'
        dot2.style.background = '#ff6262'
        dot3.style.background = '#ff6262'
        dot4.style.background = '#ffe4ba'
    }
    if(pincode.length == 4){
        dot1.style.background = '#ff6262'
        dot2.style.background = '#ff6262'
        dot3.style.background = '#ff6262'
        dot4.style.background = '#ff6262'
    }
}

function getNewYear() {
    var name = document.getElementById('name')
    var name2 = document.getElementById('name2')
    var content = document.getElementById('content')
    var youtube = document.getElementById('youtube')
    document.getElementById('password').style.display = 'none'
    document.getElementById('display').style.display = 'block'
    fetch('./info.json')
    .then(response => response.json())
    .then(data => {
        if(data.filter(({pin}) => pin == pincode).length == 0){
            name.innerHTML = "ใครไม่รู้"
            name2.innerHTML = "ใครไม่รู้"
            content.innerHTML = "ถึงเราจะไม่รู้ว่านายเป็นใครแต่ก็ขอให้มีความสุขมาก ๆ รักษาเนื้อรักษาตัวด้วย :)"
            return
        }
        var result = data.filter(({pin}) => pin == pincode)[0]
        name.innerHTML = result.name
        name2.innerHTML = result.name
        content.innerHTML = result.content
        youtube.src = result.url
    });
}