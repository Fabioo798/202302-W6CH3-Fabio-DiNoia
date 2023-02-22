# Challenge 4 week 4

## Teléfono React

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
No se puede introducir un número de más de 9 cifras.
El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.
Separa todo en los siguientes componentes:

Info
Display
Actions
Action
Keyboard
Key
Entrega también un listado de responsabilidades.

# Responsabilities

## COMPONENT INFO

1-Print call state;

2-Recibe dats form action component;

3-interact with action component;

## COMPONENT DISPLAY

1-Print the user input combinations;

2-Recibe datas from key component;

3-interact with key component, and action component;

## COMPONENT ACTIONS

1-print action;

2-recibe action component;

3-interact with display, keyboard;

## ACTION

1- print  "call" or "hang" buttons;

2- recibe "click" event from user;

3- interact with info component and display component;

## KEYBOARD

1- print key;

2- recibe key component;

3- interact with key component;

## KEY

1- print number button;

2- recibe "click" event from user;

3- interact with info;