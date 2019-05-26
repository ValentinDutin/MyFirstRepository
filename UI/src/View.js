var Module = (function() {
    let photoPosts = [
        new Post("0",
            "Рассвет...",
            new Date("2019-03-07T07:31:00"),
            "valentin_dutin",
            "https://pp.userapi.com/c855432/v855432603/4ec33/rxZLDa8vBEk.jpg",
            ["noName"],
            ["#belinsta", "#minsk"]),
        new Post("1",
            "Рассвет...",
            new Date("2019-03-07T07:31:00"),
            "valentin_dutin",
            "https://pp.userapi.com/c855432/v855432603/4ec33/rxZLDa8vBEk.jpg",
            ["noName"],
            ["#belinsta", "#minsk"]),
        new Post("2",
            "Рассвет...",
            new Date("2019-03-07T07:31:00"),
            "valentin_dutin",
            "https://pp.userapi.com/c855432/v855432603/4ec33/rxZLDa8vBEk.jpg",
            ["noName"],
            ["#belinsta", "#minsk"]),
        new Post("3",
            "зимний охотник...",
            new Date("2018-11-26T19:53:00"),
            "valek",
            "https://pp.userapi.com/c850436/v850436603/125b57/7g4f5FvVt3U.jpg",
            ["xxx"],
            ["#lox"]),
        new Post("4",
            "Рассвет...",
            new Date("2019-03-07T07:31:00"),
            "valentin_dutin",
            "https://pp.userapi.com/c855432/v855432603/4ec33/rxZLDa8vBEk.jpg",
            ["noName"],
            ["#belinsta", "#minsk"]),
        new Post("5",
            "зимний охотник...",
            new Date("2018-11-26T19:53:00"),
            "valek",
            "https://pp.userapi.com/c850436/v850436603/125b57/7g4f5FvVt3U.jpg",
            ["xxx"],
            ["#lox"]),
        new Post("6",
            "зимний охотник...",
            new Date("2018-11-26T19:53:00"),
            "valek",
            "https://pp.userapi.com/c850436/v850436603/125b57/7g4f5FvVt3U.jpg",
            ["xxx"],
            ["#lox"]),
        new Post("7",
            "зимний охотник...",
            new Date("2018-11-26T19:53:00"),
            "valek",
            "https://pp.userapi.com/c850436/v850436603/125b57/7g4f5FvVt3U.jpg",
            ["xxx"],
            ["#lox"]),
        new Post("8",
              "зимний охотник...",
              new Date("2018-11-26T19:53:00"),
              "valek",
              "https://pp.userapi.com/c850436/v850436603/125b57/7g4f5FvVt3U.jpg",
              ["xxx"],
              ["#lox"]),
        new Post("9",
            "зимний охотник...",
            new Date("2018-11-26T19:53:00"),
            "valek",
            "https://pp.userapi.com/c850436/v850436603/125b57/7g4f5FvVt3U.jpg",
            ["xxx"],
            ["#lox"]),
    ];
    let postCollection = new PostList(photoPosts);
    return {
        postCollection
    };
}());




let template = document.querySelector('#tmpl');
let templateContent = template.content;
let post = document.getElementsByClassName("PhotoPost")[0];
let dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
let user;
class View {
    constructor() {
        this._currentId = 0;
    }

    // add(post) {
    //     this._blocks.push(post);
    // }


    dynamicDownload() {
        this.addElementsToSelect();
        for (let j = 0; j < Module.postCollection._photoPosts.length; j++) {
            let tempNode = post.cloneNode(true);
            this._currentId = j;
            tempNode.children[0].children[0].src = Module.postCollection.get(j).photoLink;
            tempNode.children[1].children[0].children[0].id = "" + this._currentId + j;
            tempNode.children[1].id = "elemId" + j + "B";
            tempNode.firstElementChild.children[2].children[0].children[2].id = "elemId" + j + "M";
            let str = "Автор: " + Module.postCollection.get("" + j).author + '\r\n';

            str += "Время добавления : " + Module.postCollection.get("" + j).createdAt.toLocaleString("ru", options) + "\r\n";
            str += "Событие: " + Module.postCollection.get("" + j).description + "\r\n";
            let temp = "";
            for (let x = 0; x < Module.postCollection.get("" + j).hashTags.length; x++) {
                temp += "#" + Module.postCollection.get("" + j).hashTags[x];
            }
            str += temp;
            tempNode.firstElementChild.children[1].textContent = str;
            console.log(Module.postCollection.get("" + j).photoLink);
            let copyNode = tempNode.cloneNode(true);
            info.appendChild(tempNode);
            this.add(copyNode);
        }
        this._currentId++;
    }


    //let downloadOn = document.getElementById('addPh');

    downloadOnSite(photo, description, tags) {
        let emptyPost = {
            id: '',
            description: '',
            createdAt: '',
            author: '',
            photoLink: '',
            likes: '',
            hashTags: ''
        };
        let length1 = Module.postCollection._photoPosts.length;
        emptyPost.id = '' + this._currentId;
        emptyPost.description = description;
        emptyPost.createdAt = new Date();
        emptyPost.author = user.nickname;
        emptyPost.photoLink = photo;
        let arr = tags.split(', ');
        emptyPost.hashTags = arr;
        let newPost = new Post(emptyPost.id, emptyPost.description, emptyPost.createdAt, emptyPost.author, emptyPost.photoLink, emptyPost.likes, emptyPost.hashTags);
        Module.postCollection.add(newPost);
        let length2 = Module.postCollection._photoPosts.length;
        if (length2 > length1) {


            this._blocks.push(inn.cloneNode(true));

            this._blocks[this._currentId].firstElementChild.firstElementChild.src = Module.postCollection.get("" + this._currentId).photoLink;
            let str = "Автор: " + Module.postCollection.get("" + this._currentId).author + '\r\n';

            str += "Время добавления : " + Module.postCollection.get("" + this._currentId).createdAt.toLocaleString("ru", options) + "\r\n";
            str += "Событие: " + Module.postCollection.get("" + this._currentId).description + "\r\n";
            let temp = "";
            for (let x = 0; x < Module.postCollection.get("" + this._currentId).hashTags.length; x++) {
                temp += "#" + Module.postCollection.get("" + this._currentId).hashTags[x];
            }
            str += temp;
            this._blocks[this._currentId].firstElementChild.children[1].textContent = str;
            this._blocks[this._currentId].firstElementChild.id = "elemId" + this._currentId;
            this._blocks[this._currentId].firstElementChild.children[2].children[0].children[2].id = "elemId" + this._currentId + "M";
            this._blocks[this._currentId].children[1].id = "elemId" + this._currentId + "B";
            let copy = this._blocks[this._currentId].cloneNode(true);
            info.appendChild(copy);
            this._currentId++;
            alert("Пост добавлен успешно");
        }
    }

    deleteFromSite(id) {
        let recycle = document.getElementById('' + id);
        let button = document.getElementById('' + id + "B");
        recycle && info.removeChild(recycle);
        button && info.removeChild(button);

    }
    setUser() {
        let name = document.getElementById('userName');
        name.textContent = user.name + " " + user.surname;
        let avatar = document.getElementById('avatar');
        avatar.src = user.avatar;

    }
    authorization(login, password) {
        for (let j = 0; j < Users.length; j++) {
            if (Users[j].nickname === login && Users[j].password === password) {
                user = Users[j];
                this.setUser();
                alert("Вход выполнен успешно");
                return true;
            }

        }
        alert("Имя пользователя или пароль введены неверно");
        return false;

    }


    editPostOnSite(id, obj) {
        let arr = id.split('elemId');
        let idEl = Number(arr[1]);
        let value;
        for (let j = 0; j < this._blocks.length; j++) {
            if (this._blocks[j].firstElementChild.id === id) {
                value = j;
                break;
            }
        }
        Module.postCollection.edit(arr[1], obj);

        console.log(this._blocks[0].firstElementChild);
        this._blocks[value].firstElementChild.firstElementChild.src = Module.postCollection.get("" + arr[1]).photoLink;
        let str = "Автор: " + Module.postCollection.get("" + arr[1]).author + '\r\n';

        str += "Время добавления : " + Module.postCollection.get("" + arr[1]).createdAt.toLocaleString("ru", options) + "\r\n";
        str += "Событие: " + Module.postCollection.get("" + arr[1]).description + "\r\n";
        let temp = "";
        for (let x = 0; x < Module.postCollection.get("" + arr[1]).hashTags.length; x++) {
            temp += "#" + Module.postCollection.get("" + arr[1]).hashTags[x];
        }
        str += temp;
        this._blocks[value].firstElementChild.children[1].textContent = str;
        let postToBeChanged = document.getElementById(id);
        postToBeChanged.firstElementChild.src = Module.postCollection.get("" + arr[1]).photoLink;
        postToBeChanged.children[1].textContent = str;

        alert("Пост добавлен успешно");




    }
    isThereAnyUser() {
        if (user != undefined) {
            return true;



        }
        return false;
    }
    displayElementsForCurrentUser() {
        if (this.isThereAnyUser()) {
            let menus = document.getElementsByClassName("mobile-wrap");
            let wissList = document.getElementsByClassName("nb");
            for (let j = 0; j < menus.length; j++) {
                menus[j].style.display = "block";
                wissList[j].style.display = "block";
            }
            let form = document.getElementById("addPost");
            form.style.display = "block";

        } else {
            alert("Рекомендуем Вам войти или зарегистрироваться");
        }
    }
    addElementsToSelect() {
        let temp = document.getElementById("name");
        temp.children[0].value = Users[0].name + " " + Users[0].surname;
        temp.children[0].textContent = Users[0].name + " " + Users[0].surname;
        for (let j = 1; j < Users.length; j++) {
            temp.appendChild(temp.children[j - 1].cloneNode(true))
            temp.children[j].value = Users[j].name + " " + Users[j].surname;
            temp.children[j].textContent = Users[j].name + " " + Users[j].surname;
        }
    }
}
let Users = [{
        name: "Ivan",
        surname: "Sukach",
        avatar: "img/myface.jpg",
        age: 19,
        posts: [1, 2, 4, 5],
        nickname: "ivan.suka_ch",
        password: "aaa123",
        friends: ["_valentin_", "_.lyazhayka._"]



    },
    {
        name: "Valentin",
        surname: "Dutin",
        avatar: "img/myface.jpg",
        age: 19,
        posts: [3, 6],
        nickname: "_valentin_",
        password: "bbb123",
        friends: ["ivan.suka_ch", "_.lyazhayka._"]



    },
    {
        name: "Lyazhayka",
        surname: "Aleh",
        avatar: "img/myface.jpg",
        age: 19,
        posts: [7, 8],
        nickname: "_.lyazhayka._",
        password: "ccc123",
        friends: ["ivan.suka_ch", "_valentin_"]



    }
]
let display = new View();
display.dynamicDownload();
display.authorization("ivan.suka_ch", "aaa12");
display.authorization("ivan.suka_ch", "aaa123");
display.displayElementsForCurrentUser();
display.editPostOnSite("elemId0", {
    photoLink: "https://frazy.su/wp-content/uploads/2016/06/34741.jpg"
});
display.deleteFromSite("elemId1");
display.deleteFromSite("elemId3");
display.deleteFromSite("elemId4");
display.deleteFromSite("elemId5");

display.downloadOnSite("https://frazy.su/wp-content/uploads/2016/06/34741.jpg", "aaa", "allo, hallo");
display.downloadOnSite("https://www.grekomania.ru/images/greek-articles/other/big/354_santorini-sunset-1.jpg", "aaa", "allo, hallo");