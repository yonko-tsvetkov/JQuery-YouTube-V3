jQuery(document).ready(function ($) {
    $('#searchfield').keyup(function () {

        var key = $('#key').val().trim();
        var q = $('#searchfield').val().trim();
        var $results = $('#results');

        var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&key=" + key + "";
        $.getJSON(url + "&q=" + q, function (json) {
            var count = 0;
            if (json.items) {

                var snippet = json.items;
                var html = "";
                snippet.forEach(function (item) {
                    console.log(item.snippet.title);
                    var kind =item.snippet.title;
                    if (kind != '') {
                        html += '<p><a href="http://youtu.be/' + item.id.videoId + '">';
                        html += '<img src="http://i.ytimg.com/vi/' + item.id.videoId + '/default.jpg">';
                        html += '<h2>' + item.snippet.title + '</h2></a></p>';
                        count++;
                    }
                });
            }
            if (count === 0) {
                $results.html("No videos found");
            } else {
                $results.html(html);
            }
        });
    });
});