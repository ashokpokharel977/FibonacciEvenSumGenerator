function fibEvenSum(){
    // Check the limit
    var limit = 4000000;
    if (limit < 2){
        return 0;
    }
    //Initialize the first two even numbers and their sum
    var evenFirstTerm = 0;
    var evenSecondTerm = 2;
    var sum = evenFirstTerm + evenSecondTerm;

    //Calculating the sum of even terms
    while (evenSecondTerm <= limit){
        //Get the next even Value of fib sequence
        var evenThirdTerm = 4 * evenSecondTerm + evenFirstTerm;
        //When beyound the limit break the loop
        if (evenThirdTerm > limit) break;
        //Upadate the terms
        evenFirstTerm = evenSecondTerm;
        evenSecondTerm = evenThirdTerm;
        sum += evenSecondTerm;
    }
    return sum;
}

//Main function call
console.log(fibEvenSum()); 