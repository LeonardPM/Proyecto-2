var n1=0,n2=0; 
var signo="";

function Sumar()
{
    signo="+";
    n1= document.getElementById("pantalla").value;
    limpiarpantalla();
} 
function Restar()
{
    signo="-";
    n1= document.getElementById("pantalla").value;
    limpiarpantalla();


}
function Multiplicar()
{
    signo="*";
    n1= document.getElementById("pantalla").value;
    limpiarpantalla();


}
function Dibidir()
{
    signo="/";
    n1= document.getElementById("pantalla").value;
    limpiarpantalla();
}

function ResultadoOperar ()
{
    var resultado;
    n2=document.getElementById("pantalla").value;
    if(signo=="+")
        resultado= parseFloat(n1) + parseFloat(n2);
    
    if(signo=="-")
        resultado= parseFloat(n1) - parseFloat(n2);
    
    if(signo=="*")
        resultado= parseFloat(n1) * parseFloat(n2);

         
    if(signo=="/")
        resultado= parseFloat(n1) / parseFloat(n2);

    limpiarpantalla();
    document.getElementById("pantalla").value =resultado;
}
function Saludar(nombre)
{
    alert("hola mundo"+nombre);
}
function limpiarpantalla()
{
    document.getElementById("pantalla").value ="";
}
function MostrarEnPantalla(numero)
{
    // recuperar el valor
    var valor = document.getElementById("pantalla");
    // unimos el numero 
    valor= valor.value + numero;
    // volvemos el valor a la pantalla
    document.getElementById("pantalla").value =valor;
}
