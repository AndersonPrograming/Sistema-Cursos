const listaCursos = [
    new Curso('Desarrollo web', 'Anderson Marin', '20 horas', 'html, css, javascript', '01/23/2022', 200000),
    //new Curso('Desarrollo de aplicaciones moviles', 'Andres Corredor', '50 horas', 'Andrid studio, java, kotlin', '12/28/2021', 3690000),
];

function mostrarCursos() {
    console.log('mostrar personas');
    let texto = '';
    for (curso of listaCursos) {
        texto += `<li>
                   <b><h2>Curso de ${curso.nombre}</h2></b><br><br>
                      <b>Capacitador:</b> ${curso.capacitador}<br>
                      <b>Duracion:</b> ${curso.duracion}<br>
                      <b>Contenidos:</b> ${curso.contenidos}<br>
                      <b>Fecha:</b> ${curso.fecha}<br><br>
                      <div>${curso.costo}</div></li><br>`;
    }
    document.getElementById('personas').innerHTML = texto;
}
function agregarCurso() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const capacitador = forma['capacitador'];
    const duracion = forma['duracion'];
    const contenidos = forma['contenidos'];
    const fecha = forma['fecha'];
    const costo = forma['costo'];
    if (nombre.value != '' && capacitador.value != '' && duracion.value != '' && contenidos.value != '' && fecha.value != '' && costo.value != '') {
        const persona = new Curso(nombre.value,
            capacitador.value,
            duracion.value,
            contenidos.value,
            fecha.value,
            costo.value);
        console.log(persona);
        listaCursos.push(persona);
        mostrarCursos();
        nombre.value = "";
        capacitador.value = "";
        duracion.value = "";
        contenidos.value = "";
        fecha.value = "";
        costo.value = "";
    }
    else {
        console.log('no hay informacion que agregar');
    }


}
