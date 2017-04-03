//api key: AIzaSyBFXICcSjWGxBOlHQgcPfkOqgEChPGEgDc
//end point link: https://www.googleapis.com/youtube/v3/search

var YT_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

//retrieve api function
function getYoutubeData(searchTerm, callback) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyBFXICcSjWGxBOlHQgcPfkOqgEChPGEgDc',
        q: 'searchTerm'

    }
    $.getJSON(YT_BASE_URL, params, callback);
}

//render api data function

var dataResultElem = '';

function renderData(data) {
    if (data.Search) {
        data.Search.forEach(function (i) {
            dataResultElem += '<p>' + i.Title + '</p>';
        })
    }
    else {
        dataResultElem += '<p>No Results</p>';
    }
    $('.search-results').html(dataResultElem);
}





//event listener for api


//callback on load for event listener