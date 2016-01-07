
$(function () {

    fillTable();
    collapseTable();

    //грязно очищаем все input, при обновлении mozilla кэширует поля
    $('input').val('');

    // задаем ширину ячеки с кол-вом оказываемой услуги
    //$('.th-count').width(70);

    // шаблон input для отображания кол-ва оказываемой услуги
    var _countInputTemplate = "<input type='number' class='service-count' value='1' min='1'>";

    // stopPropagation - чтобы событие click не уходила дальше ячейки с кол-вом, чтобы tr не ловила событие
    $('.table tbody tr').on('click', '.service-count', function (e) {
        e.stopPropagation()
    });

    // при изменении кол-ва услуг пересчитываем сумму
    $('.table tbody tr').on('change', '.service-count', function (e) {
        
        var $tr = $(this).parent().parent();

        updateUnit($tr);
        getResult()
    });

    // datepicker
    $('#datepicker').datepicker({
        autoclose: true,
        todayBtn: 'linked',
        clearBtn: true,
        todayHighlight: true,
        language: "ru"
    }).datepicker("setDate", new Date());

    // textarea autosize
    //$("#diagnosis").autosize();

    // .no-print - по умолчанию не печатаем строки таблицы
    //$('.table tbody tr').addClass("no-print");

    /*
     * при нажатии на строку она становится выбранной и начинает светиться зеленым + убирается класc
     * no-print, поэтому при печати эта строка видна. Также в выбранную строку добавляется input для
     * указания кол-ва оказываемой услуги.
     * При повторном нажатии обратный эффект.
     * */
    $('.table tbody tr:not(.no-service)').click(function () {

        console.log("click");
        
        $(this).toggleClass('success no-print');

        var $countTd = $(this).find(".count");

        if ($(this).hasClass('success')) {
            $countTd.append(_countInputTemplate);
        } else {
            $countTd.empty();
        }
        updateUnit($(this));
        getResult();
    });
    //убираем скроллируемость колва услуг при наведении на input
    // disable mousewheel on a input number field when in focus
// (to prevent Cromium browsers change the value when scrolling)
    $('td').on('focus', 'input[type=number]', function (e) {
        $(this).on('mousewheel.disableScroll', function (e) {
            e.preventDefault()
        })
    })
    $('td').on('blur', 'input[type=number]', function (e) {
        $(this).off('mousewheel.disableScroll')
    })
});


function updateUnit ($tr) {
    var unitNotProportionWithCount = $tr.data('unitNotProportionWithCount');
    console.log("unitNotProportionWithCount:" + unitNotProportionWithCount);
    if (unitNotProportionWithCount) {
        var $unitInput = $tr.find(".unit");

        var $countInput = $tr.find(".service-count");
        
        if($countInput == undefined){
            $unitInput.text("3.0")
        }else{
            var val = $countInput.val();
            console.log("count val:" + val);
            if(val == 1){
                $unitInput.text("3.0")
            } else if(val == 2){
                $unitInput.text("4.0")
            }else if(val > 2){
                $unitInput.text("5.0")
            }else{
                $unitInput.text("3.0")
            }
        }
    };
}
/**
 * метод для заполнения таблицы
 * пока что данные хранятся в переменной
 */

function fillTable() {
    var $mainTableBody = $("#main tbody");
    var nodeId = 0;

    for (var i = 0; i < globalJSON.length; i++) {
        var type = globalJSON[i];
        var parentNodeId = ++nodeId;
        $mainTableBody.append("<tr class='no-service no-print tr-title collapsed' data-node='" + parentNodeId + "'>" +
            "<td></td>" +
            "<td class='td-title-name'><strong>" + type.name + "</strong></td>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
            "</tr>");

        for (var j = 0; j < type.services.length; j++) {
            var service = type.services[j];
            var unitNotProportionWithCount = service.unitNotProportionWithCount == undefined ? false : service.unitNotProportionWithCount;
            ++nodeId;
            $mainTableBody.append("<tr class='no-print' data-node='"+ nodeId+"' data-pnode='"+parentNodeId+"' data-unit-not-proportion-with-count='"+ unitNotProportionWithCount+"'>" +
                "<td>" + service.code + "</td>" +
                "<td class='td-name'>" + service.name + "</td>" +
                "<td class='count'></td>" +
                "<td class='price'>" + service.price + "</td>" +
                "<td class='unit'>" + service.unit + "</td>" +
                "</tr>");
        }
    }
    addResultField();
}
var addResultField = function () {
    var $mainTableBody = $("#main tbody");
    $mainTableBody.append("<tr class='no-service tr-result'>" +
            "<td></td>" +
            "<td class='title'>ИТОГО:</td>" +
            "<td></td>" +
            "<td id='result'></td>" +
            "<td id='unitCount'></td>" +
        "</tr>");
};
function collapseTable() {
    var $mainTableBody = $("#main tbody");
    $mainTableBody.find("tr").not(".no-service").hide();
    $(".tr-title").click(function(){
        $(this).toggleClass("collapsed expanded");
        var nodeId = $(this).data("node");
        var trChilds = $mainTableBody.find("[data-pnode='" + nodeId + "']");
        trChilds.toggle();
    })
}


// метод для подсчета итога
function getResult() {
    var selectedRows = $('.table tbody tr.success');
    var priceResult = [];
    var unitResult = [];
    for (var i = 0; i < selectedRows.length; i++) {
        var $row = $(selectedRows[i]);
        var count = $row.find(".count").find('input').val();
        if (count > 0) {
            var cost = +($row.find('.price').text());
            priceResult.push(cost * count);

            var unit = +($row.find('.unit').text());

            unitResult.push(unit* count);
        }
    }
    var totalPrice = 0;
    for (var j = 0; j < priceResult.length; j++) {
        totalPrice += priceResult[j];
    }

    this._resultPrice = $('#result');
    this._resultPrice.html(totalPrice);

    var totalUnit = 0;
    for (var j = 0; j < unitResult.length; j++) {
        totalUnit += unitResult[j];
    }

    this._resultUnit = $('#unitCount');
    this._resultUnit.html(totalUnit);
};