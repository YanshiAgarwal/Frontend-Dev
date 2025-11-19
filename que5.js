// Parent constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);  
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);

// Fix constructor reference
Student.prototype.constructor = Student;

// Add student-specific method
Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

// Creating student object
const s1 = new Student("Yanshi", "CSE");

// Calling methods
s1.showName();    
s1.showBranch();   
