$(function () {

    // 10. 練習設定初始值
    btnSet.onclick = function () {
        // 20. 將地址預設為台中
        // $('#address').val("Banciao");
        // $("#address").prop('value',"Taichung")

        $('option[value="Taichung"]').prop("selected",true);

        // 30. 將職業預設為其他

        $('input[value="teacher"]+input[value="other"]').prop("checked",true)

        // 40. 將交通工具預設為機車

        $('input[name="vehicle"]input[value="motorcycle"]').prop("checked",true)
    }
})
