'use strict'
//          Задаем начальные данные
var money,
    income= 'создание сайтов',
    addExpenses= prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”'),
    deposit= confirm('Есть ли у вас депозит в банке?'),
    expenses1= prompt ('Введите обязательную статью расходов?'),
    amount1 = +prompt ('Во сколько это обойдется' ),
    expenses2= prompt ('Введите обязательную статью расходов?'),
    amount2= +prompt ('Во сколько это обойдется?'),
    mission=+50000,
    period = 3;
//          Операции
let start = function() {
    money = prompt('ваш месячный доход?');
    
    while(isNaN(parsefloat(money)) || money.trim() === '' || money === null) {
        money = prompt('ваш месячный доход?');
    }   
};

start();



function getExpensesMonth(){
     return amount1 + amount2;    
 };  




function getAccumulatedMonth (){
    return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(mission, accumulatedMonth){
    return Number(mission) / accumulatedMonth;
};

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
console.log(amount1)
console.log(amount2)
console.log(getExpensesMonth)
console.log (getAccumulatedMonth())
console.log (accumulatedMonth)
console.log(getTargetMonth)
console.log(budgetDay)
console.log('цель заработать '+ mission + ' рублей')
console.log('период равен '+ period +' месяцев')
console.log(addExpenses.toLowerCase().split(' ', 3))



