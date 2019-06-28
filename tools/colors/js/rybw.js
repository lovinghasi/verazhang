var white_scale = 0;

function setWhiteScale(w) {
  white_scale = w;
  drawColorPicker();
}
window.addEventListener('load', drawColorPicker);

function drawColorPicker() {
      console.log(rgb2ryb(RXB.ryb2rgb([230, 230,230])));
  var rybw = document.getElementById('rybw');
  if (rybw) {
    rybw.innerHTML = "";
    var canvas = document.createElement('canvas');
    var width = rybw.clientWidth;
    canvas.width = width;
    if (canvas.width < 100) {
        console.log("too small a space to create the color picker");
        return;
    }
    var height = 300;
    canvas.height = height;
    var radius = width> 300 ? 140 : (width - 20) /2;
    rybw.appendChild(canvas);
    var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#' + '000000';
        ctx.fillRect(- width/2 + width/2, 0, 1,1);
    for (var x = - width/2; x < width/2 ; x ++) {
      for (var y = - height/2; y < height/2; y ++){
        var color = point2ryb(x, y, radius);
        ctx.fillStyle = '#' + RXB.rxb2hex(RXB.ryb2rgb(color));
        ctx.fillRect(x + width/2, height/2 -y, 1,1);  
      }
    }
    canvas.onclick = function (event) {
      var x = event.offsetX - width/2;
      var y = height/2 - event.offsetY ;
      var color = point2ryb(x, y , radius);
      var rgbHex = '#' + RXB.rxb2hex(RXB.ryb2rgb(color));
      var resultText = document.getElementById('rybw-text');
      resultText.innerHTML = "<p>You picked color</p><div style=\"width:100px;background-color:"+rgbHex+"\">"+rgbHex+"</div><p>To mix it, use ratio red:yellow:blue:white = " + color[0].toFixed(0) + ":" + color[1].toFixed(0) + ":" + color[2].toFixed(0) + ":" + white_scale + "</p>" ;
      var mixCanvas = document.getElementById('rybw-mix');
      mixCanvas.width = width;
      mixCanvas.height = 30;
      slice(mixCanvas, color[0], color[1], color[2], white_scale, 0);
    }
  } else {
    console.log('unable to find an div called rybw');
  }
}

function rgb2ryb(color){
  var r = color[0];
  var g = color[1];
  var b = color[2];
  // take white out of colors
  var w = Math.min(r, g, b);
  r = r - w;
  g = g - w;
  b = b - w;
  // get yellow out of green
  var y = Math.min(r, g);
  r -= y;
  g -= y;
  if (b>0 && g >0) {
    b /= 2;
    g /= 2;
  }
  y += g;
  b += g;

  // put colors back with value scale
  var primary = 255 - w;
  var max = Math.max(r, y, b);
  if (max>0) {
    var scale;
    if (r == max) {
      scale = primary/r;
    } else if (y == max){
      scale = primary/y;
    } else {
      scale = primary/b;
    }
    r = r *scale;
    y = y *scale;
    b = b *scale;
  } else {
    r = primary;
    y = primary;
    b = primary;
  }
  return [r, y, b];
}

function point2ryb(x, y, radius) {
  var color = [0, 0, 0];
  if (x == 0 && y == 0) {
    color = [255, 255, 255];
  } else {
      if (point2lineDistance(x, y, MAGIC_LINES.red_orange, radius) <=0 &&
          point2lineDistance(x, y, MAGIC_LINES.red_purple, radius) >=0 &&
          point2lineDistance(x, y, MAGIC_LINES.orange_black, radius) <0 &&
          point2lineDistance(x, y, MAGIC_LINES.purple_black, radius) >=0
        ) {
        var red_orange = -point2lineDistance(x, y, MAGIC_LINES.red_orange, radius);
        var purple_black = point2lineDistance(x, y, MAGIC_LINES.purple_black, radius);
        var red_purple = point2lineDistance(x, y, MAGIC_LINES.red_purple, radius);
        var orange_black = -point2lineDistance(x, y, MAGIC_LINES.orange_black, radius);
        var red = 255 - white_scale;
        var yellow = red_purple/(red_purple + orange_black) * red;
        var blue = red_orange/(red_orange + purple_black) * red;
        color = [red, yellow, blue];
      } else if (
          point2lineDistance(x, y, MAGIC_LINES.orange_black, radius) >=0 &&
          point2lineDistance(x, y, MAGIC_LINES.yellow_orange, radius) <=0 &&
          point2lineDistance(x, y, MAGIC_LINES.yellow_green, radius) <=0 &&
          point2lineDistance(x, y, MAGIC_LINES.green_black, radius) >0
        ){
        var orange_black = point2lineDistance(x, y, MAGIC_LINES.orange_black, radius);
        var yellow_orange = -point2lineDistance(x, y, MAGIC_LINES.yellow_orange, radius);
        var yellow_green = -point2lineDistance(x, y, MAGIC_LINES.yellow_green, radius);
        var green_black = point2lineDistance(x, y, MAGIC_LINES.green_black, radius);
        var yellow = 255 -white_scale;
        var red = yellow_green/(yellow_green+ orange_black)* yellow;
        var blue = yellow_orange/(yellow_orange + green_black)* yellow;
        color = [red, yellow, blue];
      } else if (
          point2lineDistance(x, y, MAGIC_LINES.green_black, radius) <=0 &&
          point2lineDistance(x, y, MAGIC_LINES.blue_green, radius) >=0 &&
          point2lineDistance(x, y, MAGIC_LINES.blue_purple, radius) >=0 &&
          point2lineDistance(x, y, MAGIC_LINES.purple_black, radius) <0
        ){
        var blue_purple = point2lineDistance(x, y, MAGIC_LINES.blue_purple, radius);
        var green_black = -point2lineDistance(x, y, MAGIC_LINES.green_black, radius);
        var blue_green = point2lineDistance(x, y, MAGIC_LINES.blue_green, radius);
        var purple_black = -point2lineDistance(x, y, MAGIC_LINES.purple_black, radius);
        var blue = 255 -white_scale;
        var yellow = blue_purple/(blue_purple + green_black) * blue;
        var red = blue_green/(blue_green + purple_black) * blue;
        color = [red, yellow, blue];
      }
  }

  return color;
}

var MAGIC_LINES = {
  'red_orange': [1, Math.sqrt(3), -Math.sqrt(3)],
  'red_purple': [1, -Math.sqrt(3), Math.sqrt(3)],
  'orange_black':[1, - Math.sqrt(3), 0],
  'yellow_orange':[1, 0, -Math.sqrt(3)/2],
  'yellow_green':[1, -Math.sqrt(3), -Math.sqrt(3)],
  'green_black':[1, 0, 0],
  'blue_green':[1, Math.sqrt(3), Math.sqrt(3)],
  'blue_purple':[1, 0, Math.sqrt(3)/2],
  'purple_black':[1, Math.sqrt(3), 0]
}

// (x, y) represents a point
// line[0]x + line[1]y + line[2]* r = 0 represents a line
// return 0 the point is on the line
// return negative the point is on the left side of the line
// return positive the point is on the right side of the line
function point2lineDistance(x, y, line, r) {
  return (line[0] * x + line[1] * y + line[2] *r ) / Math.sqrt(line[0] * line[0] + line[1] * line[1]);
}