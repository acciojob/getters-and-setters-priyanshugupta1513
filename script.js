//complete this code
class Person {
	constructor(name:string, age:number){
		this.name=name;
		this.age=age;
	}
	getName(){
		return this.name;
	}
	setAge(age:number){
		this.age=age;
	}
}

class Student extends Person {

	

	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {

	teach(){
		console.log(this.name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
