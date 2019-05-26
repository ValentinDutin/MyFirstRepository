select user_id, name 
from user

natural join photopost

group by user_id

having count(user_id) > 3