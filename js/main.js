$(function() {
    // задаем ширину ячеки с кол-вом оказываемой услуги
    $('.table thead tr').children().eq(-2).width(70);

    // шаблон input для отображания кол-ва оказываемой услуги
    var _countInputTemplate = "<input type='number' class='service-count' value='1' min='1'>";

    // stopPropagation - чтобы событие click не уходила дальше ячейки с кол-вом, чтобы tr не ловила событие
    $('.table tbody tr').on('click','.service-count',function(e){
        e.stopPropagation()
    });

    // при изменении кол-ва услуг пересчитываем сумму
    $('.table tbody tr').on('change','.service-count',function(e){
        getResult()
    });

    // datepicker
    $('#datepicker').datepicker({
        autoclose: true,
        todayBtn:'linked',
        clearBtn:true,
        todayHighlight: true,
        language: "ru"
    }).datepicker("setDate", new Date());

    // textarea autosize
    $("#diagnosis").autosize();

    // .no-print - по умолчанию не печатаем строки таблицы
    $('.table tbody tr').addClass("no-print");

    /*
     * при нажатии на строку она становится выбранной и начинает светиться зеленым + убирается класc
     * no-print, поэтому при печати эта строка видна. Также в выбранную строку добавляется input для
     * указания кол-ва оказываемой услуги.
     * При повторном нажатии обратный эффект.
     * */
    $('.table tbody tr:not(.no-service)').click(function(){

        $(this).toggleClass('success no-print');

        var $countBox = $(this).children().eq(-2);

        if($(this).hasClass('success')){
            $countBox.append(_countInputTemplate);
        }else{
            $countBox.empty();
        }
        getResult();
    });
});

// метод для подсчета итога
function getResult() {
    var selectedRows = $('.table tbody tr.success');
    var values = [];
    for (var i = 0; i < selectedRows.length; i++){
        var count = $(selectedRows[i]).children().eq(-2).find('input').val();
        if(count>0){
            var cost = +($(selectedRows[i]).children().last().children().text());
            var serviceResult = cost*count;
            values.push(serviceResult);
        }
    }
    var total = 0;
    for (var j = 0; j < values.length; j++) {
        total += values[j];
    }

    this._result = $('#result');
    this._result.val(total);
}