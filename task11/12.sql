select name, count(user_id)
from user

natural join photopost

where creation_date like '____-05-09 __:__:__'

group by user_id