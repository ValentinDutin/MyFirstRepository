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

    validate(){
        if(this._id == null){
            return false;
        }
        if(this._description == null ||
            this._description.length >= 200){
            return false;
        }
        if(this._author == null){
            return false;
        }
        if(this._createdAt == null){
            return false;
        }
        if(this.photoLink == null){
            return false;
        }
        return true;
    }

    getID(){
        return this._id;
    }
    getDescription(){
        return this._description;
    }
    getHashtags(){
        return this._hashtags;
    }
    getCreatedAt(){
        return this._createdAt;
    }
    getAuthor(){
        return this._author;
    }
    getPhotoLink(){
        return this._photoLink;
    }
    getLikes(){
        return this._likes;
    }
}









class PostCollection {
    constructor(posts){
        _photoPosts = [];
        posts.foreach(item => {
            if(item.validate()){
                _photoPosts.push(item);
            }
        });
    }

    static validate(photoPost){
        return (photoPost instanceof Post) && photoPost.validate();
    }

    getPage(filterConfig, skip = 0; top = 10){
        if(skip < 0){
                skip = 0;
        }
        if(top < 0){
            top = 10;
        }
        if(skip + top >= this._photoPosts.length){
            top = this._photoPosts.length - skip;
        }
        if(filterConfig.createdAt == undefined ||
            filterConfig.author === undefined ||
            filterConfig.hashtag === undefined){
            return null;
        }
        resultArr = [];
        photoPosts.sort(compareByDate);
        photoPosts.foreach(function(item){
            if(item.createdAt == filterConfig.createdAt ||
            item.author == filterConfig.author){
                resultArr.push(item);
            }
            for(i = 0; i < item.hashtag.length; k++){
                if(item.hashtag[i] == filterConfig.hashtag){
                    resultArr.push(item);
                    break;
                }
            }
        });
        return resultArr.slice(skip, top + skip);
    }



}