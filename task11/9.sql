select post_id, name, photo_link, creation_date, description

from user

natural join photopost

where LENGTH(description) > 12