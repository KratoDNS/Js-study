'use strict'
//          Задаем начальные данные
var money;
    let income= 'создание сайтов';
    let addExpenses= prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”');
    let deposit= confirm('Есть ли у вас депозит в банке?');
    let expenses1= prompt ('Введите обязательную статью расходов?');
    let amount1 
    let expenses2= prompt ('Введите обязательную статью расходов?');
    let amount2
    let mission=+50000;
    let period = 3;
//          Операции

let IsNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let start = function() {
   do{
    money = prompt('ваш месячный доход?');
   } 
    
    while(!IsNumber(money)) {
        money = prompt('ваш месячный доход?');
    }   
};

start();

let checkamount1= function () {
    amount1 = prompt('Во сколько это обойдется');

    while (!IsNumber(amount1)) {
        amount1 = prompt('Во сколько это обойдется');
    }
}

checkamount1()

let checkamount2= function () {
    amount2 = prompt('Во сколько это обойдется');

    while (!IsNumber(amount2)) {
        amount2 = prompt('Во сколько это обойдется');
    }
}

checkamount2()

let getExpensesMonth = Number(amount1) +Number(amount2);
  

function getAccumulatedMonth (){
    return money - getExpensesMonth;
};

getAccumulatedMonth()

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(mission, accumulatedMonth){
    return Number(mission) / accumulatedMonth;

    
};

getTargetMonth()

if (getTargetMonth >= 0) {
    console.log('Цель будет достигнута');
}   else {
    console.log('Цель не будет достигнута');
}

let budgetDay= Math.floor(accumulatedMonth/30);

        if (budgetDay >= 1200) {
            console.log('У вас высокий уровень дохода');
            } else if (1200 > budgetDay && budgetDay >= 600) {
            console.log ('У вас средний уровень дохода');
            } else if (600 > budgetDay && budgetDay >= 0) {
            console.log ('К сожалению у вас уровень дохода ниже среднего');   
            } else if (0 > budgetDay){
            console.log ('Что то пошло не так');
            }

  

console.log(start)
console.log(deposit)
console.log(expenses1)
console.log(expenses2)
console.log(checkamount1)
console.log(checkamount2)
console.log(getExpensesMonth)
console.log (accumulatedMonth)
console.log(getTargetMonth)
console.log(budgetDay)
console.log('цель заработать '+ mission + ' рублей')
console.log('период равен '+ period +' месяцев')
console.log(addExpenses.toLowerCase().split(' ', 3))



