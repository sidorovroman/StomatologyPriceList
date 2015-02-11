$(function() {
    $('#datepicker').datepicker({
        autoclose: true,
        todayBtn:'linked',
        clearBtn:true,
        todayHighlight: true,
        language: "ru"
    }).datepicker("setDate", new Date());
    $('.table tbody tr').addClass("no-print");
    $('.table tbody tr').click(function(){
        $(this).toggleClass('success no-print');
        result();
    });
});
function result() {
    this._result = $('.result');
    var rowArray = $('.table tbody tr.success');
    for (var i = 0; i < rowArray.length; i++){
        console.log($(rowArray[i]).children().last());
    }
}