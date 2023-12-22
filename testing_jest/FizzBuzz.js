class FizzBuzz{
     validar_primos_3_5(numero) {

        if(numero %15 === 0){
            return "FizzBuzz";

        }else if(numero %3 === 0){
            return "Fizz";
        }else if(numero %5 === 0){
            return "Buzz";
        }else(numero %15 !== 0);{
            return numero; 
        }
};
}

module.exports = FizzBuzz;