(function() {
  $('#jcrop_target').Jcrop({
    onChange: showCoords,
    onSelect: showCoords,
    minSize: [200, 200],
    onRelease: clearCoords,
    // http://deepliquid.com/content/Jcrop_Sizing_Issues.html
    boxWidth: 400,
    boxHeight: 400
  });
  function showCoords(c) {
    $('#book_crop_x').val(c.x);
    $('#book_crop_y').val(c.y);
    $('#book_crop_w').val(c.w);
    $('#book_crop_h').val(c.h);
  };
  function clearCoords() {
    $('#coords input').val('');
  };
})();