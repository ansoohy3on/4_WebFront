// [내 코드]
// $("#menu1").on("click", function(){
//     $("#menu1").next().slideDown();

//     $("#menu1").on("click", function(){
//         $("#menu1").next().slideUp();
//     })
// })

// $("#menu2").on("click", function(){
//     $("#menu2").next().slideDown();

//     $("#menu2").on("click", function(){
//         $("#menu2").next().slideUp();
//     })
// })

// $("#menu3").on("click", function(){
//     $("#menu3").next().slideDown();

//     $("#menu3").on("click", function(){
//         $("#menu3").next().slideUp();
//     })
// })

// $("#menu4").on("click", function(){
//     $("#menu4").next().slideDown();

//     $("#menu4").on("click", function(){
//         $("#menu4").next().slideUp();
//     })
// })

// $("#menu5").on("click", function(){
//     $("#menu5").next().slideDown();

//     $("#menu5").on("click", function(){
//         $("#menu5").next().slideUp();
//     })
// })

$('div').on("click", function(){

    if($(this).next("p").css("display") == "none"){
        
        $(this).siblings(".contents").slideUp();
        $(this).next().slideDown();

    } else{
        $(this).next().slideUp();
    }
})