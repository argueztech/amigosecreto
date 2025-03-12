let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('nombre').value.trim();
    console.log(nombre);

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(nombre);

    document.getElementById('nombre').value = "";

    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById('amigos');
    lista.innerHTML = "";

    for (let indice = 0; indice < amigos.length; indice++) {
        let li = document.createElement('li');
        li.textContent = amigos[indice];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];
    let textoMensaje = "El amigo secreto seleccionado es: "

    document.getElementById('resultado').innerHTML = textoMensaje + amigoSorteado;
}