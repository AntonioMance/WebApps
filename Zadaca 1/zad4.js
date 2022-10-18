function Converter(X) {
    var broj = X;
    var sati = (broj / 60);
    var rsati = Math.floor(sati);
    var minute = (sati - rsati) * 60;
    var rminute = Math.round(minute);
    return broj + " minuta = " + rsati + " sata i " + rminute + " minuta.";
    }
    
    console.log(Converter(200));