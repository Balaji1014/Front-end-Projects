Webcam.set({

    width: 150,
    height: 100,
    image_format:'jpeg',
    jpeg_quality:90
})

Webcam.attach("#camera")

function take_snap(){

    Webcam.snap(function(data_uri){
        document.getElementById('results').innerHTML =
            
            '<img src="'+data_uri+'"/>';

    });
}