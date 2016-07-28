//PLAN of steps to do Key:
67a68a6fb97d68d77bfd6c8ff27b2135

Secret:
c505816071a9ba79
$(function() {

    //STEP 1 : get the data from API youtube 
    function getImage(searchTerm) {
        var url = 'https://ajax.googleapis.com/ajax/services/search/images';
        var params = {
            part: 'snippet',
            key: 'AIzaSyCQQNC20CuEMQVuJSe-NVyZ9NXZHUbWlgc',
            q: searchTerm,
            v: 1.0,
            maxResults: 10
        };

        $.getJSON(url, params, function(data) {
            //STEP 2 : Analize the API Data  
            console.log(data.items);
            showData(data.items);
        });
    }

    // STEP 3 : Show/render it to HTML 
    function showData(result) {
        var html = '';

        $.each(result, function(index, value) {
            html += '<a href="https://www.google.com/imghp?hl=en&tab=wi&ei=OzaaV6PZL8ex-QGL-KGICg&ved=0EKouCBYoAQ='+ value.id.videoId + ' "> <img src="' + 
            value.snippet.thumbnails.high.url + '" class="col-xs-12 col-md-4 img-responsive"></a> <h5>'+ 
            value.snippet.title +'</h5>';
        });
        $("#resultsContainer").append(html);
    }

    //STEP 4 : Create an Event handler 
    //that on click calls our data and Show Data functions

    $('form').submit(function(e) {
        e.preventDefault();
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        getData(searchTerm);
        $('#searchTerm').val('');

        //alert(searchTerm);

    });

});