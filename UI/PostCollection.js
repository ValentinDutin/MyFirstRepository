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
    _compareByDate(first, second){
        if(first.createdAt > second.createdAt){
            return -1;
        }
        else if(first.createdAt > second.createdAt){
            return 1;
        }
        else{
            return 0;
        }
    }

    getLength(){
        return this._photoPosts.length;
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
        if(filterConfig._createdAt == undefined ||
            filterConfig._author === undefined ||
            filterConfig._hashtag === undefined){
            return null;
        }
        resultArr = [];
        tmpArr = [];
        tmpArr = this._photoPosts;
        tmpArr.sort(this._compareByDate);
        tmpArr.foreach(function(item){
            if(item.getCreatedAt == filterConfig._createdAt ||
            item.getAuthor == filterConfig._author){
                resultArr.push(item);
            }
            for(i = 0; i < item._hashtags.length; k++){
                if(item.getHashtags[i] == filterConfig._hashtags){
                    resultArr.push(item);
                    break;
                }
            }
        });
        return resultArr.slice(skip, top + skip);
    }

    get(id){
    this._photoPosts.foreach(item => {
        if(item.getID == id){
            return item;
        }
    });
    return null;
    }

    add(photoPost){
        if(photoPost.validate()){
            this._photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    edit(id, photoPost){
        post = get(id);
        if(post == null){
            return false;
        }
        if(photoPost._descriprion != null ||
        photoPost._descriprion.length < 200){
            post._descriprion = photoPost._descriprion;
        }
        if(photoPost._photoLink != null){
            post._photoLink = photoPost._photoLink;
        }
        if(photoPost._likes != null){
            post._likes = photoPost._likes;
        }
        if(photoPost._hashtag != null){
            post._hashtag = photoPost._hashtag;
        }
        return true;
    }

    remove(id){
        for(i = 0;i < this._photoPosts.length; i++){
            if(this._photoPosts[i].getID() == id){
                this._photoPosts.splice(i, 1);
            }
        }
    }

    addAll(posts){
        if(posts == null){
            return null;
        }
        else{
            posts.foreach(item => {
                if(item.validate){
                    this._photoPosts.push(item);
                }
            });
        }
    }

    clear(){
        this._photoPosts.splice(0, this._photoPosts.length);
    }
}