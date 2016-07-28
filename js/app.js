function jsonFlickrFeed(json) {
    console.log(json);
  };

  $(document).ready(function() {

    $.ajax({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne',
      dataType: 'jsonp',
      data: {
        "tags": "kitten",
        "format": "json"
      }
    });

  });