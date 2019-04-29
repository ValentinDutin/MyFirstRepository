class Post{
    constructor (id, description, createdAt, author, photoLink, likes, hashtags) {
        this._id = id;
        this._description = description;
        this._createdAt = createdAt;
        this._author = author;
        this._photoLink = photoLink;
        this._hashtags = hashtags || [];
        this._likes = likes || [];
    }

    validate(photoPost){
        if(photoPost.id == null){
            return false;
        }
        if(photoPost.description == null ||
            photoPost.description.length >= 200){
            return false;
        }
        if(photoPost.author == null){
            return false;
        }
        if(photoPost.createdAt == null){
            return false;
        }
        if(photoPost.photoLink == null){
            return false;
        }
        return true;
    }

}









class PostCollection {
    constructor(posts){
        _photoPosts = [];
        posts.foreach(item => {
            if(item.validate){
                _photoPosts.push(item);
            }
        });
    }

    static validate(photoPost){
        if(photoPost.id == null){
            return false;
        }
        if(photoPost.description == null ||
        photoPost.description.length >= 200){
            return false;
        }
        if(photoPost.author == null){
            return false;
        }
        if(photoPost.createdAt == null){
            return false;
        }
        if(photoPost.photoLink == null){
            return false;
        }
        return true;
    }



}