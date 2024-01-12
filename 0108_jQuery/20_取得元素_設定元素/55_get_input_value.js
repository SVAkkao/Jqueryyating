// 10. 如果是這樣寫的話，有錯誤訊息，為什麼？

//1.在元素誕生(12)之前就想要存取元素(7)
//2.script應該要放在</body>之前
//3.放在head不對
//3.應放在document ready 之後做
//筆試

// btnGet.onclick = function(){
//     console.log("OK");
// }












































































// 11. 畫面準備好以後才開始執行
$(function () {
    btnGet.onclick = function () {
        
        // 20. 取得 姓名欄位 (使用 JavaScript 的方式)
        // 21. 取得 姓名欄位 (使用 jQuery 的方式)
var js1 = userName.value;
var jq1 = $('#userName').val();
console.log(js1);
console.log(jq1);

        console.clear();
        // 30. 取得 地址欄位 (使用 JavaScript 的方式)
        // 31. 取得 地址欄位 (使用 jQuery 的方式)
        var js2 = document.getElementById('address').value
        var jq2 = $('#address').val();
        console.log(js2);
        console.log(jq2);

        console.clear()
        // 40. 取得 年紀欄位 (使用 JavaScript 的方式)
        //要如何獲得年紀的元素有哪些?       
        //獲取使用者透過radio選擇的年紀
        //判斷radio被選取checked
        // if(document.getElementByName('age').checked==true)
        // var elem = document.getElementsByName('age');
        // console.log(elem); //陣列[] 類陣列[]

        // console.log(elem[0]);
        // console.log(elem[1]);
        // console.log(elem[2]);
        // console.log(elem[3]);

        // console.log(elem[0].checked) // true
        // console.log(elem[1].checked) // false
        // console.log(elem[2].checked) // false
        // console.log(elem[3].checked) // false

        // for(let index = 0; index <elem.length; index++){
        //     if(elem[index].checked == true){
        //         console.log(elem[index].value);
        //     }
        // }
        //document.querySelectorAll

        //取得該radio的value


        // 41. 取得 年紀欄位 (使用 jQuery 的方式)
        //$(選擇元素).行動();
        //CSS 要怎麼選擇 checked

        console.clear();
        var temp = $("input[name='age']:checked").val();
        console.log(temp);
    }
})



