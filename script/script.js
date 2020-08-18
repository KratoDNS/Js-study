'use strict'
let money = +prompt('ваш месячный доход?');

let income= 'создание сайтов';

var addExpenses= prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”');

let deposit= confirm('Есть ли у вас депозит в банке?');

function getExpensesMonth(){
    return amount1 + amount2;    
 };

let expenses1= prompt ('Введите обязательную статью расходов?');
let amount1 = +prompt ('Во сколько это обойдется' );



let expenses2= prompt ('Введите обязательную статью расходов?');
let amount2= +prompt ('Во сколько это обойдется?');




 

function getAccumulatedMonth (){
    return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth()


function getTargetMonth(mission, accumulatedMonth){
    return mission/accumulatedMonth();
};



let mission=50000;
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



     

  

console.log(Number(money))
console.log(deposit)
console.log(expenses1)
console.log(expenses2)
console.log(amount1)
console.log(amount2)
console.log(getExpensesMonth)
console.log (getAccumulatedMonth())
console.log (accumulatedMonth)
console.log( getTargetMonthgit)
console.log(budgetDay)
console.log('цель заработать '+ mission + ' рублей')
console.log('период равен '+ 'period' +' месяцев')
console.log(addExpenses.toLowerCase().split(' ', 3))



