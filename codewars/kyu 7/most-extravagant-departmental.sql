/*
https://www.codewars.com/kata/663109d79cda6608c36fb77a/sql
*/
select department_name, SUM(cast(amount as money)) as total_questionable_expenses 
from departments JOIN expenses
ON departments.department_id = expenses.department_id
WHERE expenses.description ILIKE '%confetti%' 
  OR expenses.description ILIKE '%glitter%'
  OR expenses.description ILIKE '%golden toilet%'
  OR expenses.description ILIKE '%massage chair%'
  OR expenses.description ILIKE '%video game%'
  OR expenses.description ILIKE '%karaoke%'
  OR to_char(expenses.date, 'MM-DD') = '04-01'
  OR to_char(expenses.date, 'MM-DD') = '05-21'
GROUP BY department_name
ORDER BY SUM(cast(amount as money)) DESC, 1 DESC
LIMIT 5