// Imports
const {expect} = require ("@jest/globals");
const FizzBuzz = require ("../FizzBuzz");


describe('Tests que validan los múltiplos de 3 y 5', () => {

const fizz_buzz = new FizzBuzz();
    /**
         * Feature para saber cuándo un número es primo de 3 y de 5
         * 1. Cuando el usuario digite un número divisible por 3, devuelve Fizz
         * 2. Cuando el usuario digite un número divisible por 5, devuelve Buzz
         * 3. Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz
         * 4. Cuando el usuario digite un número no sea divisible por 3 o 5, devuelve el número
    */

    test('Test devuelve Fizz cuando divisible por 3', () =>{
        /**
         * GHERKIN
            * GIVEN / ARRANGE: un número (<---- Este es un escenario)
            * WHEN / ACT: cuando este sea divisible por 3
            * THEN / ASSERT: devuelve Fizz como resultado
         */
        
        //ARRANGE: preparar el escenario 
        const numero_ingresado = 3; //un número que SIEMPRE sea divisible entre 3
        const respuesta_esperada = "Fizz"; //Ponemos la respuesta que esperamos que vaya a dar
        

        //ACT: ejecuta el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar el escenario 
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    //Segundo test
    test('Test devuelve Fizz cuando divisible por 5', () =>{
        /**
         * GHERKIN
            * GIVEN / ARRANGE: un número (<---- Este es un escenario)
            * WHEN / ACT: cuando este sea divisible por 5
            * THEN / ASSERT: devuelve Buzz como resultado
         */
        
        //ARRANGE: preparar el escenario 
        const numero_ingresado = 5; //un número que SIEMPRE sea divisible entre 5
        const respuesta_esperada = "Buzz"; //Ponemos la respuesta que esperamos que vaya a dar

        //ACT: ejecuta el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar el escenario 
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    //Tercer test
    test('Test devuelve FizzBuzz cuando divisible por 3 y 5', () =>{
        /**
         * GHERKIN
            * GIVEN / ARRANGE: un número (<---- Este es un escenario)
            * WHEN / ACT: cuando este sea divisible por 3 y 5
            * THEN / ASSERT: devuelve FizzBuzz como resultado
         */
        
        //ARRANGE: preparar el escenario 
        const numero_ingresado = 15; //un número que SIEMPRE sea divisible entre 3 y 5
        const respuesta_esperada = "FizzBuzz"; //Ponemos la respuesta que esperamos que vaya a dar

        //ACT: ejecuta el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar el escenario 
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })
     //Cuarto test
     test('Test devuelve el número ingresado cuando no sea divisible por 3 o 5', () =>{
        /**
         * GHERKIN
            * GIVEN / ARRANGE: un número (<---- Este es un escenario)
            * WHEN / ACT: cuando este no sea divisible por 3 o 5
            * THEN / ASSERT: devuelve es número como resultado
         */
        
        //ARRANGE: preparar el escenario 
        const numero_ingresado = 7; //un número que NUNCA sea divisible entre 3 o 5
        const respuesta_esperada = numero_ingresado; //Ponemos la respuesta que esperamos que vaya a dar

        //ACT: ejecuta el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar el escenario 
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })
})