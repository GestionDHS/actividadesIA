// import tmImage from '../../tm/teachablemachine-image.min'
import { validate } from './test';
import Swal from 'sweetalert2'

const url = "https://teachablemachine.withgoogle.com/models/BN3rqSFVH/";

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

        // Chequear que viene
        // console.log();

       

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
    
    
    async function loop() {
        webcam.update(); // update the webcam frame
        let prediction = await predict();
        let validation = await validate(prediction)
        if (!validation || validation.length < 4) {
            window.requestAnimationFrame(loop);
        }else if (validation.length == 4) {
            Swal.fire({
                title: "¡Excelente!",
                text: "La palabra secreta es: AUTOMÁTICO",
                imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWYwZXg4ODQ2YzY4ZmM2d3A3aW80em5zcDlyZzI5bDgyZzl4dXRzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dM7hugod40Y1fvZ8XV/giphy.gif",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Text Comics Sticker By Emojiup"
            });
        }
    }
    
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        return prediction    
    }
    
document.getElementById("btn-start").addEventListener("click", init())
    
    // const pgEvent = new PgEvent();
    // window.onload = pgEvent.getValues();
    // const mensajePGExito = "Muy Bien logrado!"
    // const miTest= new TestClass(mensajePGExito);