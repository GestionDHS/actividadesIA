// let objCompletos = 0;
// let objetivosDeseados = 4;
// import Swal from 'sweetalert2'
let prediccionesUnicas = []

export const validate = async (prediction) => {
    for (let i = 0; i < prediction.length; i++){
        // prediccionesTotales.push(prediction)
        if (prediction[i].probability.toFixed(2)>0.95) {
            switch (prediction[i].className) {
                case "Árbol":
                    document.getElementById("obj1").style.color = "green";
                    document.getElementById("obj1").style.fontWeight = "bold";
                    prediccionesUnicas.includes("Árbol") || prediccionesUnicas.push("Árbol");
                    break;
                case "Gato":
                    document.getElementById("obj2").style.color = "green";
                    document.getElementById("obj2").style.fontWeight = "bold";
                    prediccionesUnicas.includes("Gato") || prediccionesUnicas.push("Gato");
                    break;
                case "Auto":
                    document.getElementById("obj3").style.color = "green";
                    document.getElementById("obj3").style.fontWeight = "bold";
                    prediccionesUnicas.includes("Auto") || prediccionesUnicas.push("Auto");
                    break;
                case "Lápiz":
                    document.getElementById("obj4").style.color = "green";
                    document.getElementById("obj4").style.fontWeight = "bold";
                    prediccionesUnicas.includes("Lápiz") || prediccionesUnicas.push("Lápiz");
                    break;
            }
        }
        
    }
    if (prediccionesUnicas.length == 4) {
        return prediccionesUnicas
    }
    
}