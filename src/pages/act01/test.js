// let objCompletos = 0;
// let objetivosDeseados = 4;
// import Swal from 'sweetalert2'
let prediccionesUnicas = []

export const validate = async (prediction) => {
    for (let i = 0; i < prediction.length; i++){
        // prediccionesTotales.push(prediction)
        if (prediction[i].probability.toFixed(2)>0.95) {
            switch (prediction[i].className) {
                case "ARRIBA":
                    document.getElementById("obj1").style.color = "green";
                    document.getElementById("obj1").style.fontWeight = "bold";
                    prediccionesUnicas.includes("ARRIBA") || prediccionesUnicas.push("ARRIBA");
                    break;
                case "ABAJO":
                    document.getElementById("obj2").style.color = "green";
                    document.getElementById("obj2").style.fontWeight = "bold";
                    prediccionesUnicas.includes("ABAJO") || prediccionesUnicas.push("ABAJO");
                    break;
                case "DERECHA":
                    document.getElementById("obj3").style.color = "green";
                    document.getElementById("obj3").style.fontWeight = "bold";
                    prediccionesUnicas.includes("DERECHA") || prediccionesUnicas.push("DERECHA");
                    break;
                case "IZQUIERDA":
                    document.getElementById("obj4").style.color = "green";
                    document.getElementById("obj4").style.fontWeight = "bold";
                    prediccionesUnicas.includes("IZQUIERDA") || prediccionesUnicas.push("IZQUIERDA");
                    break;
            }
        }
        
    }
    if (prediccionesUnicas.length == 4) {
        return prediccionesUnicas
    }
    
}