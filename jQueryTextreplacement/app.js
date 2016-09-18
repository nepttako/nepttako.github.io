$(function () {
    // 將使用者輸入的文字做替換
    $('#top-left-text').keyup(function () {
        $toplefttext = $(this).val();
        $('.top-left-caption').text($toplefttext);
    });
    $('#top-right-text').keyup(function () {
        $toprighttext = $(this).val();
        $('.top-right-caption').text($toprighttext);
    });
    $('#bottom-left-text').keyup(function () {
        $bottomlefttext = $(this).val();
        $('.bottom-left-caption').text($bottomlefttext);
    });
    $('#bottom-right-text').keyup(function () {
        $bottomrighttext = $(this).val();
        $('.bottom-right-caption').text($bottomrighttext);
    });
    $('.btn').click(function () {
        html2canvas($('#meme'), {
            onrendered: function (canvas) {
                var img = canvas.toDataURL();
                window.open(img);
            }

        });
    });
});
