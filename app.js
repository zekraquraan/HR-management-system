'use strict'

//employee
function Employee(employeeId,fullName,department,level,imageUrl,salary) {
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=0;
   
}
Employee.prototype.randomSalary=function () {
    console.log(this);
   
    if(this.level=="Junior"){
       
        this.salary=Math.floor(Math.random() * (1000 - 500) ) + 500;
        

console.log(this.salary);
    }
    else if(this.level=="Mid-Senior"){
        this.salary=Math.floor(Math.random() * (1500- 1000) ) + 1000;
console.log(this.salary);
    }
    else if(this.level=="Senior"){
        
        this.salary=Math.floor(Math.random() * (2000- 1500) ) + 1500;
    
console.log(this.salary);
    }
  }
  Employee.prototype.netSalary=function (){
    
    (this.salary=this.salary*(1-.075));
   console.log(this.salary);
  }
  Employee.prototype.render=function(){
console.log(`employeeName is ${this.fullName},${this.salary}`);

  }
let employee1 =new Employee(1000,"Ghazi Samer","Administration","Senior");
let employee2=new Employee(1001,"Lana Ali","Finance","Senior");
let employee3=new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let employee4=new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let employee5=new Employee(1004,"Omar Zaid","Development","	Senior");
let employee6=new Employee(1005,"Rana Saleh","Development","Junior");
let employee7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");
//console.log(employee1);

employee1.randomSalary();
employee1.netSalary();
employee2.randomSalary();
employee2.netSalary();
employee3.randomSalary();
employee3.netSalary();
employee4.randomSalary();
employee4.netSalary();
employee5.randomSalary();
employee5.netSalary();
employee6.randomSalary();
employee6.netSalary();
employee7.randomSalary();
employee7.netSalary();
employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();
