function forvoData(json){
	console.log(json)
  var myData = json.items[0];
  console.log(myData);
};

function getData() {

        $.ajax({
            url: 'http://apifree.forvo.com/',
            dataType: 'jsonp',
            data: {
            	action: 'word-pronunciations',
            	format: 'json',
            	word: 'hund',
                language: 'de',
                key: '0f50e41f73f4e8ef682496c136e02994'
            }	
        });
}



// $.getJSON('http://apifree.forvo.com/action/word-pronunciations/format/json/word/hund/language/de/key/0f50e41f73f4e8ef682496c136e02994/&callback=?', function(data){
  
//   var myData = data.items;
//   console.log(myData);
// });
