cmd_G = '"Hi Google"';
cmd_A = '"Hi Amazon"';
text = "1";
function Google(){
    $("#cmd_recommend").show();
    $("#cmd").text("Hi Google")

    $("#end").hide();
    $(".make").hide();
}
function Amazon(){
    $("#cmd_recommend").show();
    $("#cmd").text("Hi Alexa")

    $("#end").hide();
    $(".make").hide();
}

function End(){
    $("#end").show();
    $(".make").hide();
    $("#cmd_recommend").hide();
}
function Make(){
    $("#end").hide();
    $(".make").show();
    $("#cmd_recommend").hide();

}

