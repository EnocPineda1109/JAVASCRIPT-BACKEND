const enoc = {
  nombre: 'Enoc',
  apellido: 'Pineda'
}

function saludar(veces, uppercase){
  for(let i= 0; i< veces; i++){
  console.log(`Hola ${this.nombre} ${this.apellido}`)
}
}
saludar.call(enoc,3)
 
