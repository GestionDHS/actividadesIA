export class TestClass {
    constructor(mensajePGExito) {
      this.listaDeErrores = [],
        this.callbackTesteo = null,
        this.mensajePGExito = mensajePGExito
    }
    setearCallback(callback, pgEvent, personajePrincipal) {
      this.callbackTesteo = callback
      this.pgEvent = pgEvent
      this.personajePrincipal = personajePrincipal
    }
    init() {
      this.listaDeErrores = this.callbackTesteo(this.personajePrincipal, this.listaDeErrores)
      if (this.listaDeErrores.length == 0) {
        this.pgEvent.onSuccessEvent(this.mensajePGExito)
        this.personajePrincipal.abrirYMostrarModal();
      } else {
        //this.pgEvent.onFailEvent(this.listaDeErrores);
        console.log(this.listaDeErrores)//que enliste el error y su causa de muerte
        //Falta : obj.decirTerminar("¡No logramos el mismo diseño!");
      }
    }
  }