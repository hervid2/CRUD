export const listarUsuarios = async () => {
    const data = await fetch("http://localhost:3000/usuarios");
  const nombre = await data.json();
  return nombre;
}