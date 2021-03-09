window.onload = () =>{

    $("#popup").hide();

    $('.menu>li>ul>li').hide();

    $('.menu').hover(()=>{
        $('.menu>li>ul>li').stop().slideDown();
    },
    ()=>{
        $('.menu>li>ul>li').stop().slideUp();
    }
    );

    var slide = $(".slide > img");
    var sno = 0;
    var eno = slide.length - 1;
    

    setInterval(function(){
        $(slide[sno]).animate({
            top:"-100%"
        },1000,function(){
            $(this).css({top:"100%"});
        });
        sno++;
        if(sno > eno) sno = 0;
        $(slide[sno]).animate({
            top:"0"
        },1000);

    },3000);

    $(".newsTab").click(function(){
        $(this).css({
            "border-bottom":"0",
            "background-color":"#fff"
        });
        $(".galleryTab").css({
            "border-bottom":"1px soild #000",
            "background-color":"#888"
        });
        $(".gallery").hide();
        $(".news").show();
    });
    
    $(".galleryTab").click(function(){
        $(this).css({
            "border-bottom":"0",
            "background-color":"#fff"
        });
        $(".newsTab").css({
            "border-bottom":"1px soild #000",
            "background-color":"#888"
        });
        $(".gallery").show();
        $(".news").hide();
    });
    $(".pop").click(()=>{
        $("#popup").show();
    });
    $(".offpop").click(()=>{
        $("#popup").hide();
    });
}

