select datediff(curtime(), str_to_date(creation_date,'%Y-%m-%d %T'))

from photopost

order by creation_date
limit 1