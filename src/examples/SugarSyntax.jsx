//FUNCTION
function sumar (a, b) {
    return a+b
}

sumar(3,7) //10

//arrOw Function

const sumar = (a, b)=> {
    return a +b 
}


const sumar2 = (a,b)=> a +b 

const nombre = 'Pepe'

//condicion
 if(nombre){
    console.log('hola')
 }else {
    console.log('chau')
 }


 const edad = 20

 edad > 18 ? console.log('sos mayor') : console.log('menor')

 let mensaje;

 if(nombre){
    mensaje= 'Hola  usuario' 
 }else {
    mensaje ='inicia sesión'
 }

 const mensajeSugar = edad >= 18 ? 'Sos mayor de edad' : 'Sos menor de edad'


 //DESTRUCTIRING

 const usuario = {
    nombre: 'Maria', 
    edad: 25,
    mail: 'maria@maria.com'
 }

 console.log(usuario.mail)

 const {nombre: name, mail}= usuario
 console.log(mail, name)

 const colores = ['rojo', 'celeste', 'blanco']

 console.log(colores[1], colores[0])

 const [primerColor, segundoColor] =colores

 //spread Operator (objetos y arrays)
 const numeros = [1,2,3]
 const numerosConcat = numeros.concat([4,5,6]) //[1,2,3,4,5,6]

 const numerosSpread = [...numeros, 4,5,6,7,8,9]

 
 const newUsuario = {...usuario, ciudad:'La Plata'}




