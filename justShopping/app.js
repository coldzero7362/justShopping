window.onload = () =>{
    $('.menu>li>ul>li').hide();

    $('.menu').hover(()=>{
        $('.menu>li>ul>li').slideDown();
    },
    ()=>{
        $('.menu>li>ul>li').slideUp();
    }
    );
    $(".newsTab").click(()=>{
        $(this).css({
            "border-bottom":"0",
            "background-color":"#fff"
        });
        $(".galleryTab").css({
            "border-bottom":"1px soild #333",
            "background-color":"#555"
        });
        $(".gallery").hide();
        $(".news").show();
    });
    $(".galleryTab").click(()=>{
        $(this).css({
            "border-bottom":"1px soild #333",
            "background-color":"#555"
        });
        $(".newsTab").css({
            "border-bottom":"0",
            "background-color":"#fff"
        });
        $(".gallery").show();
        $(".news").hide();
    });
}

