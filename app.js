'use strict'

//employee
const allEmployees=[];
function Employee(employeeId,fullName,department,level,imageUrl,salary) {
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=0;
    allEmployees.push(this);
   
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
document.write(`<h3>employeeName is ${this.fullName}, Salary: ${this.salary}</h3>`);

  }
let employee1 =new Employee(1000,"Ghazi Samer","Administration","Senior");
let employee2=new Employee(1001,"Lana Ali","Finance","Senior");
let employee3=new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let employee4=new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let employee5=new Employee(1004,"Omar Zaid","Development","	Senior");
let employee6=new Employee(1005,"Rana Saleh","Development","Junior");
let employee7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");
//console.log(employee1);
methodCaller(allEmployees);

console.log(allEmployees);
function uniqueId(){
  Math.floor(Math.random() * 1000)
  
}
allEmployees[this.employeeId].uniqueId();
function methodCaller(){
for(let i=0;i<allEmployees.length;i++){
  allEmployees[i].randomSalary();
  allEmployees[i].render();
 
}}
let h1El=document.getElementsByTagName("heading");
console.log(h1El);
let body=document.getElementsByName("body");
//console.log(body[0]);
let h3El=document.createElement('h3');
console.log(h3El);
h3El.textContent="welcome";
//console.log(h3El);
//body[0].appendChild(h3El);
let submit=document.getElementById("submit");


submit.addEventListener('click', function() {
  allEmployees[i].Employee();
});
let h2El=document.getElementsByTagName("cards");
console.log(h2El);
let cardEl=document.getElementByClass("container");
console.log(cardEl);
let imgEl=document.createElement('img');
imgEl.src=this.imageUrl;
cardEl.appendChild(imgEl);
let h4El=document.createElement('h4');
console.log(h4El);
let h5El=document.createElement('h5');
console.log(h5El);

