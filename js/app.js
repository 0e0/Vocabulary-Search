function jsonFlickrFeed(json) {
    console.log(json);
    var myData = json.items[0].media.m;
    console.log(myData);
    var html = '';
    $("#results-container").empty();
    $.each(json.items, function(index, value) {
        html += '<img src="' + value.media.m + '"class="col-xs-12 col-md-4 img-responsive">';
    });
    $("#results-container").append(html);
};

function getData(searchTerm) {

    $.ajax({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne',
        dataType: 'jsonp',
        data: {
            tags: searchTerm,
            format: 'json'
        }
    });
    $.getJSON('http://apifree.forvo.com/action/word-pronunciations/format/json/word/' + searchTerm + '/language/de/key/0f50e41f73f4e8ef682496c136e02994/&callback=?', 
        function(data) {
                    console.log(data);
        var myData = data.items[0].pathmp3;
        console.log(myData);
        $('.forvo-link').text("Download " + searchTerm).attr('href', myData);
    });

}


$('form').submit(function(e) {
    e.preventDefault();
    var searchTerm = $('#search-term').val();
    console.log(searchTerm);
    getData(searchTerm);
    $('#search-term').val('');
});