function jsonFlickrFeed(json) {
    console.log(json);
    var myData = json.items[0].media.m;
    console.log(myData);
    var html = '';
    $("#results-container").empty();
    $.each(json.items, function(index, value) {
    html += '<img src="'+ value.media.m
        +'"class="col-xs-12 col-md-4 img-responsive">';
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


}


$('form').submit(function(e){
    e.preventDefault();
    var searchTerm = $('#search-term').val();
    console.log(searchTerm);
    getData(searchTerm);
    $('#search-term').val('');
});


   

    