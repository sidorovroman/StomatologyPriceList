$(function() {
    $('.table thead tr').children().eq(-2).width(70);

    $('#datepicker').datepicker({
        autoclose: true,
        todayBtn:'linked',
        clearBtn:true,
        todayHighlight: true,
        language: "ru"
    }).datepicker("setDate", new Date());
    $("#diagnosis").autosize();
    $('.table tbody tr').addClass("no-print");
    $('.table tbody tr').click(function(){
        $(this).toggleClass('success no-print');
        if($(this).hasClass('success')){
            $(this).children().eq(-2).append("<input type='number' class='service-count' value='1'>");
        }else{
            $(this).children().eq(-2).empty();
        }
        getResult();
    });
});

function getResult() {
    var rowArray = $('.table tbody tr.success');
    var values = [];
    for (var i = 0; i < rowArray.length; i++){
        values.push(+($(rowArray[i]).children().last().children().text()));
    }
    var total = 0;
    for (var j = 0; j < values.length; j++) {
        total += values[j];
    }

    this._result = $('#result');
    this._result.val(total);
}