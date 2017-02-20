function jsonFlickrFeed(json) {
  for (var i = 0; i < json.items.length; i++) {
    $(".row").append('<div class="cell" style="background:url(' + json.items[i].media.m + ') top no-repeat; background-size:cover;background-repeat:no-repeat;" class="img-responsive image"></div>');
  }
};

function load() {
  var tag = $('#tag').val();
  $(".row").html("");
  $.ajax({
    type: "POST",
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: {
      "tags": tag,
      "format": "json"
    }
  });
};
