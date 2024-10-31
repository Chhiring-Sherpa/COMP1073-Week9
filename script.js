//this is the answer for the Q2 and Q3 both in same page

class User{
    constructor(name, email){
        this.email=email;
        this.name=name;
        
    }
    viewData(){
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    Edit( name, email){
        this.name= name;
        this.email=  email;
    }

}
const a1= new Admin("Chhiring", "chhirings123@gmail.com");
a1.viewData();
a1.Edit("nidoma", "chhirings123@gmail.com")
a1.viewData();
