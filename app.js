//api key: AIzaSyBFXICcSjWGxBOlHQgcPfkOqgEChPGEgDc
//end point link: https://www.googleapis.com/youtube/v3/search

var YT_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

//retrieve api function
function getYoutubeData(searchTerm, callback) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyBFXICcSjWGxBOlHQgcPfkOqgEChPGEgDc',
        q: searchTerm,
        maxResults: 10

    }
    $.getJSON(YT_BASE_URL, params, callback);
}

//render api data function

var dataResultElem = '';

function renderData(data) {
    if (data.items) {
        data.items.forEach(function (i) {
            ytImg = i.snippet.thumbnails.default.url;
            ytURL = i.id.videoId
            dataResultElem += '<p>' + i.snippet.title + '</p>' +
                '<a href =https://www.youtube.com/watch?v=' + ytURL + '>' +
                '<img src=' + ytImg + '>' + '</img>' +
                '</a>';
        })
    }
    else {
        dataResultElem += '<p>No Results</p>';
    }
    $('.search-results').html(dataResultElem);
}





//event listener for api

function listenForSearch() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var input = $('.js-query').val()
        getYoutubeData(input, renderData);
    })
}


//callback on load for event listener

$(function () { listenForSearch() });