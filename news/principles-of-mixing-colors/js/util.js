function slice(canvas, r, y, b, w) {
  canvas.style.border = "1px solid #000000";
  var ctx = canvas.getContext("2d");
  var total = r + y + b + w;
  var width = canvas.width;
  var height = canvas.height;
  var colorList = new Array('#FE2712', '#FEFE33', '#0247FE', '#FFFFFF');
  var colorRatio = new Array(r/total, y/total, b/total, w/total);
  var lastX = 0;
  for (var i = 0; i < colorRatio.length; i++) {
     ctx.fillStyle = colorList[i];
     ctx.fillRect(lastX, 0, colorRatio[i] * width, height);
     lastX = lastX + colorRatio[i] * width;
  }
}