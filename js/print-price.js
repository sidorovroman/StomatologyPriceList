
$(function () {

    fillTable();
});


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

        console.log(type.name);
        $mainTableBody.append("<tr class='no-service  tr-title'>" +
            "<td></td>" +
            "<td class='td-title-name'><strong>" + type.name + "</strong></td>" +
            "<td></td>" +
            "</tr>");

        for (var j = 0; j < type.services.length; j++) {
            var service = type.services[j];
            console.log(service.type);
            ++nodeId;
            $mainTableBody.append("<tr>" +
                "<td>" + service.code + "</td>" +
                "<td class='td-name'>" + service.name + "</td>" +
                "<td class='price'>" + service.price + "</td>" +
                "</tr>");
        }
    }
}