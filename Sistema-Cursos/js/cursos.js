class Curso{
    constructor(nombre, capacitador, duracion, contenidos, fecha, costo) {
        this._nombre = nombre;
        this._capacitador = capacitador;
        this._duracion = duracion;
        this._contenidos = contenidos;
        this._fecha = fecha;
        this._costo = costo;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get capacitador() {
        return this._capacitador;
    }
    set capacitador(capacitador) {
        this._capacitador = capacitador;
    }
    get duracion() {
        return this._duracion;
    }
    set duracion(duracion) {
        this._duracion = duracion;
    }
    get contenidos() {
        return this._contenidos;
    }
    set contenidos(contenidos) {
        this._contenidos = contenidos;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get costo() {
        return this._costo;
    }
    set costo(costo) {
        this._costo = costo;
    }

}