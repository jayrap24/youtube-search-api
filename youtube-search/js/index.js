
  $(document).ready(function() {

    let searchTerm = " ";

    function getData(searchTerm) {
      const query = {
        part: 'snippet',
        key: 'AIzaSyACGyqUv-viv_3q6-j9_xFpJSKAcg_U5zk',
        q: `${searchTerm} in:name`
      }

      $.getJSON("https://www.googleapis.com/youtube/v3/search", query, displayData);
    }

      
    let displayData = function(data) {
      $.each(data.items, function(i, item) {
        let result = item.snippet.thumbnails.default.url;
        console.log(result)
        let thumbnail = ` <img src =${result}>`
        $("#results").append(thumbnail)
      });
    };

      
    $("#search-form").submit(function(event) {
      event.preventDefault();
      let test = $("#search-input").val();
      searchTerm = test;
      getData(searchTerm);
    });

      
      
      
  });

  
  
  

