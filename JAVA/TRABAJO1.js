//Enunciado:  Se deben crear tres (3)  funciones de flecha que permitan recibir dentro de sus párametros de entrada una Callback function de acuerdo a lo visto en clase.   La función de flecha a entregar debe realizar manipulación de uno o mas arreglos.

//Nota:  Si dicha función no recibe una callback function o no manipula como minimo un arreglo, no cumplirá lo solicitado y, por lo tanto, no obtendrá nota por dicha función.   Debe cumplir com ambas restricciones para obtener nota.


funcionejercicio1 = () =>{
    const uvaly = ["paleta", "rubor", "gloss", "productocejas"];
    uvaly.push("polvo");
    return uvaly;
}

const empresa = (callbackFunction) =>{
   const uvaly2 = callbackFunction();
   console.log(uvaly2);
}

empresa(funcionejercicio1);
/*----------------------------------------------------------------------------------------------*/

funcionejercicio2 = () =>{
    const bodeguita = ["corset", "enterizo", "tennis", "pants"];
    bodeguita.pop();
    return bodeguita;
}

const final = (callbackFunction) =>{
   const bodeguita2 = callbackFunction();
   console.log(bodeguita2);
}

final(funcionejercicio2);

/*-----------------------------------------------------------------------------------------------*/
funcionejercicicio3= () =>{
    const añosuvaly = [1,2,3];
    añosuvaly.forEach(añosuvaly =>console.log(añosuvaly));
    return añosuvaly;
}

const anitos= (callbackFunction) =>{
   const añito = callbackFunction();
   console.log(añito);
}

anitos(funcionejercicicio3);