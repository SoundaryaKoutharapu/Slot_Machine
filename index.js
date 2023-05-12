// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. spin the slot machine
// 5. Check if the user won
// 6. give the user their winnings
// 7. Play again

const prompt = require('prompt-sync')();

const deposit = () => 
{
    while(true)
    {
        const depositAmount = prompt('enter the deposit amount: ');
        const numberDepositAmount = Number(depositAmount);

        if(isNaN(numberDepositAmount) || (numberDepositAmount <=0))
        {
         console.log("invalid deposit");
        }
        else
        {
            return numberDepositAmount;
        }
   }
    
};

const depositAmount =  deposit();
console.log(depositAmount);

