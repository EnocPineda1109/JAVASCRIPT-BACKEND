class Toggable {
constructor(el){
  //Inicia el estado interno
  this.el = el
  this.el.innerHTML = 'Off'
  this.activated = false
  this.el.addEventListener('click',this.onClick.bind(this))
}

  onClick(){

    this.activated = !this.activated
    this.toggleText()
    //cambiar estado interno 4
    // llamar a toggleText
  }
  toggleText(){
    //cambiar texto
    this.el.innerHTML = this.activaded ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
