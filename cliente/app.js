// importar funciones de otros módulos
import listar from "./app/ciudades/listar.js";
import llenadoDocumento from "./app/ciudades/listarDocumento.js";
import insertar from "./app/usuarios/crear.js";
import { listarUsuarios } from "./app/usuarios/listar.js";


// seleccionar elementos del DOM
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipo_documento = document.querySelector("#tipo");
const ciudad = document.querySelector("#ciudad");
const documento = document.querySelector("#documento");
const email = document.querySelector("#email");
const formulario = document.querySelector(".form");
const cuerpoTabla = document.querySelector("#tbody");

const ciudades = await listar();
const tipos_documentos = await llenadoDocumento();
const listar_Usuarios = await listarUsuarios();



// listar ciudades
const llenadoCiudad = (ciudades,ciudad) => {
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "Seleccione ciudad...";
    fragmento.append(option);
    ciudades.forEach(({id, nombre}) => {
        const option = document.createElement("option");
        option.textContent = nombre;
        option.value = id;
        fragmento.append(option);
    });
    ciudad.append(fragmento);
}


// listar documentos
const llenadoDocumentos = (documentos, elemento)=>{
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "Seleccione documento...";
    fragmento.append(option);
    documentos.forEach(({id, nombre}) =>{
        const option = document.createElement("option");
        option.textContent = nombre;
        option.value = id;
        fragmento.append(option);
    })
    elemento.append(fragmento);
}


// listar usuarios
const llenadoUsuarios = (usuarios, elemento) => {
    const fragmento = document.createDocumentFragment();
    const usuario = document
}



const btn = document.querySelector('button[type="submit"]');
const guardarUsuario = (event) => {
    event.preventDefault();
// validar ???
    const data = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        ciudad: ciudad.selectedIndex,
        telefono: telefono.value,
        direccion: direccion.value,
        tipo_documento: tipo_documento.selectedIndex,
        documento : documento.value,
        email: email.value,
        checkbox: politicas.value,
    }
    insertar(data)
}

export default insertar;

llenadoCiudad(ciudades, ciudad);
llenadoDocumentos(tipos_documentos, tipo_documento);
listarUsuarios();


formulario.addEventListener("submit", guardarUsuario);

