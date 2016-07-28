function jsonFlickrFeed(json) {
    console.log(json);
     var myData = json.items[0].media.m;
        console.log(myData);
};

// function showData(json) {
//         var html = '';
       

//       console.log(value.media);
//         $.each(json, function(index, value) {
//         html += '<p>'+ value.media.m + '</p>' ;
//         });
//         $("#resultsContainer").append(html);
//     };
// // showData();


    $(document).ready(function() {

        $.ajax({
            url: 'https://api.flickr.com/services/feeds/photos_public.gne',
            dataType: 'jsonp',
            data: {
                "tags": "football",
                "format": "json"
            }
        });


    });

    