$("ul").on("click","li",checker);
function checker () {
$(this).toggleClass("completed");  
}

$("ul").on("click",".Trash", remover);

function remover(e) {
    $(this).parent().fadeOut(100, function () {
        $(this).remove();
    });
    e.stopPropagation();
}


$("#ADD").keypress(function (e) {

    if (e.which === 13) {

        var neveshtehKamel = $(this).val();
        $("#ADD").val("");
        $("ul").append('<li><span class="Trash"><i class="fa fa-trash" aria-hidden="true"></i></span>' + neveshtehKamel + '<span class="Tick"><i class="fa fa-square-o" aria-hidden="true"></i></span></li>');

        if (flag==false)
                $(".Tick").css("display", "block");
        else
            $(".Tick").css("display", "none");
    
    
    }

});

$(".fa-plus").click(function () {

   $("#searchInput").fadeOut(2);
    $("#ADD").fadeToggle(200);
});

$("h1").on("click","#mark",  hidder);

var flag = true;

function hidder() {

        $(".Tick").fadeToggle(200);
    if (flag){
            flag = false;    
        }
        else {
            flag = true;
        }

}



$("ul").on("click", ".Tick", function () {

    $(".Tick").show();
    if ($(this).html() === '<i class="fa fa-square-o" aria-hidden="true"></i>')
        $(this).html('<i class="fa fa-check-square" aria-hidden="true"></i>');

    else
        $(this).html('<i class="fa fa-square-o" aria-hidden="true"></i>');

});

//<i class="fa fa-square-o" aria-hidden="true"></i>

//    if ($("li > .Tick").html()==='<i class="fa fa-check-square" aria-hidden="true"></i>')
//        $("li").has().remove();
//}


//$("li > Tick").css("background-color", "yellow");


//
//if ($("li").html().search('check')>0)
//    $(this).css("background-color", "yellow");
//


$("#remover").on("click", rem2);

function rem2() {


    for (i = 0; i < $("li").length; i++) {


        if ($("li:eq(" + i + ")").html().search('check') > 0)
            $("li:eq(" + i + ")").fadeOut(200, function () {
                $(this).remove();
            });
    }


}





//function ticker (){
//
//    $(".Tick").show();       
//    if ($(this).html() === '<i class="fa fa-square-o" aria-hidden="true"></i>'){
//            console.log ($(this).html());
//            ($(this).html('<i class="fa fa-check-square" aria-hidden="true"></i>'));
//            console.log ($(this).html());}
//    else 
//           {
//            console.log ($(this).html());
//            $(this).html('<i class="fa fa-square-o" aria-hidden="true"></i>');
//            console.log ($(this).html());
//
//           } 
//
//
//
//
//}



    var t = true;


$("#markAll").on("click",clicker)

function clicker(){
    
        $(".Tick").show();

    if(t){
        $(".Tick").html('<i class="fa fa-check-square" aria-hidden="true"></i>');   
        t = false;    
    }
    else{
        $(".Tick").html('<i class="fa fa-square-o" aria-hidden="true"></i>');
        t = true;    
    }
        
    }

$("#Search").on("click",function(){
    
   $("#ADD").fadeOut(2);
    $("#searchInput").fadeToggle(200);

    
});


//
//jQuery.expr[':'].icontains = function(a, i, m) {
//  return jQuery(a).text().toUpperCase()
//      .indexOf(m[3].toUpperCase()) >= 0;
//};
//
////s
////
////            $("#searchInput").on("keyup", function () {       
////            var searchTerm = $("#searchInput").val();
////            $('li').hide().filter(':icontains("' + searchTerm + '")').show()            
////        });
//        
$("#searchInput").on("keyup", function() {
  var searchTerm = $("#searchInput").val();
  $("ul li").show().filter(function() {
    return $(this).text().toLowerCase().indexOf(searchTerm) == -1
  }).hide();
});
    
    