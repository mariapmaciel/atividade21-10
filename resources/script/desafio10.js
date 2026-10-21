let notas = [8, 7, 9, 4, 6, 10];
let verificar = notas.every( nota => nota > 0 && nota <= 10)

if(verificar){
    console.log("Notas Válidas")
}
else{
    console.log("Notas Inválidas")
}