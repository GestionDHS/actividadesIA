const url = "https://teachablemachine.withgoogle.com/models/qLVScoZyJ/";

let model, webcam, labelContainer, maxPredictions;
    
// let clases = ["Arriba", "Abajo", "Derecha", "Izquierda"]

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = url + "model.json";
        const metadataURL = url + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

       

        if (!document.querySelector("#webcam-container canvas")) {
            // Convenience function to setup a webcam
            const flip = true; // whether to flip the webcam
            webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);

            // append elements to the DOM
            document.getElementById("webcam-container").appendChild(webcam.canvas);
            document.getElementById("btn-start").setAttribute("disabled", true)
        } else {
            document.getElementById("webcam-container").innerHTML = "No se puede mostrar la camara"
        }
        // labelContainer = document.getElementById("label-container");
        // for (let i = 0; i < maxPredictions; i++) { // and class labels
        //     labelContainer.appendChild(document.createElement("div"));
        // }
    }
    
    document.getElementById("btn-start").addEventListener("click", init())

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        // console.log(prediction);
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="ARRIBA") {
                document.getElementById("obj1").style.color = "green";
            }
            if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="ABAJO") {
                document.getElementById("obj2").style.color = "green";
            }
            if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="DERECHA") {
                document.getElementById("obj3").style.color = "green";
            }
            if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="IZQUIERDA") {
                document.getElementById("obj4").style.color = "green";
            }
            // const classPrediction =
            //     prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            // labelContainer.childNodes[i].innerHTML = classPrediction;

        }
        
    }

    const pgEvent = new PgEvent();
    window.onload = pgEvent.getValues();
    const mensajePGExito = "Muy Bien logrado!"
    const miTest= new TestClass(mensajePGExito);