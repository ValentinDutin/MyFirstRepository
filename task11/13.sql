select name

from user

natural join photopost

where datediff(curtime(), str_to_date(creation_date, '%Y-%m-%d %T')) = 0

group by user_id

having count(user_id) > 3