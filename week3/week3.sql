-- 1번
select e.first_name, e.last_name, e.salary, floor(e.salary*1.1) as incresed_salary
from employee e
inner join branch b
on e.branch_id = b.branch_id
where b.branch_name = 'Corporate';

-- 2번
select first_name, last_name, salary
from employee
where sex = 'M' and (salary>=60000 and salary<=80000);

-- 3번
select first_name, last_name, branch_id, salary
from employee
order by branch_id desc, salary asc;

-- 4번
select e.first_name, e.last_name, total_sales
from Works_With w
join employee e on w.emp_id = e.emp_id
join client c on w.client_id = c.client_id
where c.client_name = 'FedEx' and e.salary >= 60000;

-- 5번
select sum(salary) as total_salary,
max(salary) as max_salary,
min(salary) as min_salary,
avg(salary) as avg_salary
from employee;

-- 6번
select count(*) as total_employees from employee;

-- 7번
select b.branch_name, count(*) as employess_in_branch
from employee e
inner join branch b
on e.branch_id = b.branch_id
group by e.branch_id;