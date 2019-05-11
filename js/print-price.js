
$(function () {





    fillTable();
    $('#tabs a:first').tab('show') // Select first tab
    $('#tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
});


/**
 * метод для заполнения таблицы
 * пока что данные хранятся в переменной
 */

function fillTable() {


    var tableTemplate = '<div class="box">'+
                                '<table class="table table-hover table-striped">'+
                                  '  <thead>'+
                                   ' <tr>'+
                                        '<th><strong>№</strong></th>'+
                                        '<th><strong>Код</strong></th>'+
                                        '<th><strong>Виды работ</strong></th>'+
                                        '<th class="th-price"><strong>цены, руб</strong></th>'+
                                    '</tr>'+
                                    '</thead>'+
                                    '<tbody>'+
                                    '</tbody>'+
                                '</table>'+
                        '</div>';

    var $tabs = $("#tabs");
    var $tabContent = $("#tab-content");

    for (var i = 0; i < typeListJSON.length; i++) {
        var tab = typeListJSON[i];
        var tabTemplate = "<li role='presentation'><a href='#tab-"+tab.id+"' aria-controls='tab-"+tab.id+"' role='tab' data-toggle='tab'>"+tab.name+"</a></li>";
        $tabs.append(tabTemplate);
        
        var titleTemplate = "<div><div class='form-group protocol-title'><label class='control-label' for='datepicker'>"+tab.title+"</label></div></div>";
        var tabContentTemplate = "<div role='tabpanel' class='tab-pane' id='tab-"+tab.id+"'></div>";
        $tabContent.append(tabContentTemplate);

        var $currentTabContent = $("#tab-"+tab.id);
        $currentTabContent.append(titleTemplate);
        $currentTabContent.append(tableTemplate);
        var $container = $currentTabContent.find("tbody");
        fillTabContent(tab.ids,$container);
    }
}

function fillTabContent (ids,$container) {
    for (var i = 0; i < globalJSON.length; i++) {
        var type = globalJSON[i];
        if(ids.indexOf(type.id)!=-1){
            $container.append("<tr class='no-service  tr-title'>" +
                "<td></td>" +
                "<td></td>" +
                "<td class='td-title-name'><strong>" + type.name + "</strong></td>" +
                "<td></td>" +
                "</tr>");

            for (var j = 0; j < type.services.length; j++) {
                var service = type.services[j];
                $container.append("<tr>" +
                    "<td>" + service.code + "</td>" +
                    "<td class='td-classifier-code'>" + service.classifier_code + "</td>" +
                    "<td class='td-name'>" + service.name + "</td>" +
                    "<td class='price'>" + service.price + "</td>" +
                    "</tr>");
            }
        }
    }
}
