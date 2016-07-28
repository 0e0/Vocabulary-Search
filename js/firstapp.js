//PLAN of steps to do secretkey: 54f516ad437cbc7a
    $(function() {

//     function jsonFlickrApi(data) {
//         console.log(data);
//     }

//     //STEP 1 : get the data from API youtube (Remember to place the searchTerm back as a parameter)
//     function getImage() {
//         var url = 'https://api.flickr.com/services/rest/?';
//         var params = {
//             format: 'jsonp',
//             api_key: 'c462c4f54e7fd6cafdc94532bbdb69d5',
//             tags: 'monkey',
//             // searchType: 'image',
//             //maxResults: 10,
//             method: 'flickr.photos'
//         };

//         $.getJSON(url + '&callback=?', params, function(data) {
//             //STEP 2 : Analize the API Data  
//             console.log(data)
//             // console.log(data.items);
//             // showData(data.items);
//         });
//     }
//getImage();


function jsonFlickrFeed(json) {
  console.log(json);
  
};

  
  $.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: { "tags": "kitten", "format": "json" }
  });
   
// <script>
//   (function() {
//     var cx = '008577567035179202735:rfbaqfoibuw';
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);
//   })();
// </script>
// <gcse:search></gcse:search>





    // STEP 3 : Show/render it to HTML 
//     function showData(result) {
//         var html = '';

//         $.each(result, function(index, value) {
//             html += '<a href="https://www.google.com/imghp?hl=en&tab=wi&ei=OzaaV6PZL8ex-QGL-KGICg&ved=0EKouCBYoAQ='+ value.id.videoId + ' "> <img src="' + 
//             value.snippet.thumbnails.high.url + '" class="col-xs-12 col-md-4 img-responsive"></a> <h5>'+ 
//             value.snippet.title +'</h5>';
//         });
//         $("#resultsContainer").append(html);
//     }

 //STEP 4 : Create an Event handler 
//that on click calls our data and Show Data functions

//     $('form').submit(function(e) {
//         e.preventDefault();
//         var searchTerm = $('#searchTerm').val();
//         console.log(searchTerm);
//         getData(searchTerm);
//         $('#searchTerm').val('');

        //alert(searchTerm);

//     });

 // part: 'snippet',
            // cx: '008577567035179202735:rfbaqfoibuw'

});