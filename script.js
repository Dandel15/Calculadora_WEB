// script.js
// seleccionar la pantalla y los botones
const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones-grid button');

// agregar evento 'click' a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        if (valor === 'c' || valor === 'C') {
            // limpiar la pantalla
            pantalla.value = '0';

        } else if (valor === '=') {
            // evaluar la expresión matemática
            try {
                pantalla.value = eval(
                    pantalla.value
                        .replace('÷', '/')
                        .replace('×', '*')
                );
            } catch {
                pantalla.value = 'Error';
            }

        } else if (valor === '+/-') {
            // cambiar el signo del número
            if (pantalla.value.startsWith('-')) {
                pantalla.value = pantalla.value.slice(1);
            } else {
                pantalla.value = '-' + pantalla.value;
            }

        } else {
            // agregar el valor a la pantalla
            if (pantalla.value === '0' || pantalla.value === 'Error') {
                pantalla.value = valor;
            } else {
                pantalla.value += valor;
            }
        }
    });
});
