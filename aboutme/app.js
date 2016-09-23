$(document).ready(function () {
    $(document).keydown(function (key) {
        switch (parseInt(key.which, 10)) {
            //左鍵
            case 37:
                $('img').animate({
                    left: "-=10px"
                }, 'fast');
                break;
                //上鍵
            case 38:
                $('img').animate({
                    top: "-=10px"
                }, 'fast');
                break;
                //右鍵
            case 39:
                $('img').animate({
                    left: "+=10px"
                }, 'fast');
                break;
                //下鍵
            case 40:
                $('img').animate({
                    top: "+=10px"
                }, 'fast');
                break;
                // default
            default:
                $('img').animate({
                    top: "-=10px"
                }, 'fast');
                $('img').animate({
                    top: "+=10px"
                }, 'fast');
                break;
        }
    });
})
