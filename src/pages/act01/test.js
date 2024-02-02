// export const ganarSiPasaTest = (obj, listaDeErrores) => {
//     obj.mochila.length != 4 && listaDeErrores.push("Quedaron cofres por abrir")
//     const intento = obj.buscarParaRealizarAccion("cofre", "abrirse");
//       !intento && listaDeErrores.push("¡No se puede abrir el cofre!")
//       return listaDeErrores
//   };

// // run the webcam image through the image model
// export async function test() {
//     // predict can take in an image, video or canvas html element
//     const prediction = await model.predict(webcam.canvas);
//     // console.log(prediction);
//     for (let i = 0; i < maxPredictions; i++) {
//         if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="ARRIBA") {
//             document.getElementById("obj1").style.color = "green";
//         }
//         if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="ABAJO") {
//             document.getElementById("obj2").style.color = "green";
//         }
//         if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="DERECHA") {
//             document.getElementById("obj3").style.color = "green";
//         }
//         if (prediction[i].probability.toFixed(2)>0.95 && prediction[i].className=="IZQUIERDA") {
//             document.getElementById("obj4").style.color = "green";
//         }
//         // const classPrediction =
//         //     prediction[i].className + ": " + prediction[i].probability.toFixed(2);
//         // labelContainer.childNodes[i].innerHTML = classPrediction;

//     }
    
// }