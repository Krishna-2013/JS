let data = "srcret information";
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    veiwData () {
        console.log(`Data = ${data}`);
    }
}

class admin extends user {
    constructor(name, email) {
        super(name,email);
    }
    editData () {
        data = "Some new value";
    }
}


let student1 = new user("Krishna", "anhsirksettings@gmail.com");
let student2 = new user("Rife", "raifiulkarim@gamil.com");

let adimn1 = new admin("admin1", "admin1#gmail.com");