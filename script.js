  // Función para deshabilitar copiar y pegar
  function disableCopyPaste(event) {
    event.preventDefault();
    alert("¡No puedes copiar o pegar en este campo!");
}

// Deshabilitar copiar y pegar en los campos de texto
document.getElementById("htmlExercise").addEventListener("copy", disableCopyPaste);
document.getElementById("htmlExercise").addEventListener("paste", disableCopyPaste);

document.getElementById("cssExercise").addEventListener("copy", disableCopyPaste);
document.getElementById("cssExercise").addEventListener("paste", disableCopyPaste);

document.getElementById("jsExercise").addEventListener("copy", disableCopyPaste);
document.getElementById("jsExercise").addEventListener("paste", disableCopyPaste);

// Ejercicio HTML
function checkHtmlCode() {
    const htmlCode = document.getElementById("htmlExercise").value;
    const feedback = document.getElementById("htmlFeedback");

    if (htmlCode.includes("<h1>") && htmlCode.includes("</h1>") && htmlCode.includes("¡Bienvenidos al Mundo de la Programación!")) {
        feedback.textContent = "¡Bien hecho! Tu título está correcto.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "¡Casi! Asegúrate de usar una etiqueta <h1> y escribir el título correctamente.";
        feedback.style.color = "red";
    }
}

// Ejercicio CSS
function checkCssCode() {
    const cssCode = document.getElementById("cssExercise").value;
    const feedback = document.getElementById("cssFeedback");

    if (cssCode.includes("background-color") && cssCode.includes("color")) {
        feedback.textContent = "¡Buen trabajo! Has cambiado correctamente los colores.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Intenta nuevamente. Asegúrate de usar 'background-color' para el fondo y 'color' para el texto.";
        feedback.style.color = "red";
    }
}

// Ejercicio JavaScript
function checkJsCode() {
    const jsCode = document.getElementById("jsExercise").value;
    const feedback = document.getElementById("jsFeedback");

    if (jsCode.includes("console.log") && jsCode.includes('"¡Hola Mundo!"')) {
        feedback.textContent = "¡Perfecto! Has usado correctamente console.log.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Intenta de nuevo. Asegúrate de usar 'console.log' y poner el texto correctamente.";
        feedback.style.color = "red";
    }
}