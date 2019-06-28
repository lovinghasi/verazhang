
var TupperFormula = (function() {

	let TupperFormula = {};

  	let getK = function() {
    	return "960939379918958884971672962127852754715004339660129306651505519271702802395266424689642842174350718121267153782770623355993237280874144307891325963941337723487857735749823926629715517173716995165232890538221612403238855866184013235585136048828693337902491454229288667081096184496091705183454067827731551705405381627380967602565625016981482083418783163849115590225610003652351370343874461848378737238198224849863465033159410054974700593138339226497249461751545728366702369745461014655997933798537483143786841806593422227898388722980000748404719";
  	}

  	let getRandomColor = function() {
	   var letters = '0123456789ABCDEF';
	   var color = '#';
	   for (var i = 0; i < 6; i++) {
	     color += letters[Math.floor(Math.random() * 16)];
	   }
	   return color;
	}

  	TupperFormula.drawCanvas = function a(canvas) {
	  	var ctx = canvas.getContext("2d");
	  	var canvasWidth = canvas.width;
	  	var canvasHeight = canvas.height;
	  	var pixelWidth = canvasWidth / 106;
	  	k = getK()
	  	var bigInput = BigNumber(k);
	 	var bitString = bigInput.dividedBy(17).integerValue(BigNumber.ROUND_FLOOR).toString(2).padStart(1802, 0)
	 	var i = 0;
	    for (var x = 0; x < 106; x++) {
	        for (var y = 0; y < 17; y++) {
	            var bit = bitString[i];
	            if (bit == "1") {
	                ctx.fillStyle = getRandomColor() ;
	            	ctx.fillRect(x * pixelWidth, canvasHeight -(y+1) * pixelWidth, pixelWidth, pixelWidth);               
	            }
	            i++;
	        }
	    }

	    
    } 
  	return TupperFormula;
})();