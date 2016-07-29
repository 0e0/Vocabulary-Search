function forvoData(json) {
    console.log(json)
    var myData = json.items[0];
    console.log(myData);
    var html = '';
    $("#forvo-results-container").empty();
    $.each(json.items, function(index, value) {
        html += '<img src="' + value.media.m 
        + '"class="col-xs-12 col-md-4 img-responsive">';
    });
    $("#forvo-results-container").append(html);
};

function getData(searchTerm) {

    $.ajax({
        url: 'http://apifree.forvo.com/',
        dataType: 'jsonp',
        action: 'word-pronunciations',
        format: 'json',
        word: searchTerm,
        language: 'de',
        key: '0f50e41f73f4e8ef682496c136e02994'
        });
    
    };


//}


$('form').submit(function(e){
    e.preventDefault();
    var searchTerm = $('#search-term').val();
    console.log(searchTerm);
    getData(searchTerm);
    $('#search-term').val('');

});
// $.getJSON('http://apifree.forvo.com/action/word-pronunciations/format/json/word/hund/language/de/key/0f50e41f73f4e8ef682496c136e02994/&callback=?', function(data){

//   var myData = data.items;
//   console.log(myData);
// });