function loadEvent() { //load data via ajax

    var url_load = "https://pmdiana.hcilab.katrina.tw/event";
    $.ajax({
        url: url_load,
        dataType: "json",
        success: function(items) {
            event(items);
        }
    });
}

var ass_id;

function poke(county) {

    if ($('#sel').val()) {
        ass_id = $('#sel').val();
    }

    var url_fetch = "https://pmdiana.hcilab.katrina.tw/fetch?county=" + county + "&assessment_id=" + ass_id;

    $.ajax({
        url: url_fetch,
        dataType: "json",
        success: function(items) {
            //console.log(items);
            // sort(items);
            items = sort(items);
            loadJSON(items);
            plot(items);
        }
    });
}

function loadDetail(school) {

    var url_detail = "https://pmdiana.hcilab.katrina.tw/detail?userid=" + userid[school] + "&assessment_id=" + ass_id;

    $.ajax({
        url: url_detail,
        dataType: "json",
        success: function(items) {
            detail(items);
        }
    });
}
