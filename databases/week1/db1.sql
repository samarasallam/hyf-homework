show tables;
describe user;
describe task;

# 1) how many tasks in the task table 
select count(*)
from task;
#35 

# 2) Find out how many tasks in the task table do not have a valid due date
select count(*)
from task
where task.due_date is NULL;
# 8 

# 3) tasks that are marked as done
select task.id, task.title, task.description, status.name
from task join status 
where status.name like "%done%"; 
# got 35 tasks with titles and description 

# 4) tasks that are not marked as done
select task.id, task.title, task.description, status.name
from task join status
where status.name not like '%done%';
# got 70 rows returned

# 5) Get all the tasks, sorted with the most recently created first
select *
from task
order by created DESC;
# got 35 rows returned

# 6) Get the single most recently created task
select *
from task
order by created DESC
limit 1;

# 7) Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task 
where title like '%database%' or description like '%database%';
# got 5 rows returned

# 8) Get the title and status (as text) of all tasks
select task.title, status.name
from task join status on task.status_id = status.id;
# 35 rows returned 

# 9) Get the name of each status, along with a count of how many tasks have that status
select status.name, count(*)
from status join task on status.id = task.status_id
group by status.name;
# not started=8; in progress=15; done=12

# 10) Get the names of all statuses, sorted by the status with most tasks first
select status.name, count(*)
from status join task on status.id = task.status_id
group by status.name
order by count(*) DESC;
# in progress=15; done=12; not started=8


