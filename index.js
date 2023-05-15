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


getNumberOfLines = () =>
{
    while(true)
    {
        const lines = prompt('enter number of lines to bet on: ');
        const numberOfLines = parseFloat(lines);

        if(isNaN (numberOfLines) || numberOfLines<=0 || numberOfLines >3)
        {
            console.log('invalid input, try again');
        }
        else
        {
            return numberOfLines;
        }

    }    
}


const getBet = (balance, numberOfLines) => 
{
    while(true)
    {
        const bet = prompt('enter the bet amount per line: ');
        const betAmount = parseFloat(bet);

        if(isNaN(betAmount) || betAmount <=0 || betAmount > balance/numberOfLines)
        {
            console.log('invalid bet, try again');
        }
        else
        {
            return betAmount;
        }
    }
}


let balance = deposit();
console.log(balance);

const numberOfLines = getNumberOfLines();
console.log(numberOfLines);

const betAmount = getBet(balance, numberOfLines);
console.log(betAmount);