let employee={
    name:"shashavali",
    id:1023,
    job:"Java Developer",
    sal:400000,
    bonus:function () {
        return ((this.sal*10)/100);
    }

};
console.log(employee.name);
console.log(employee.sal);
console.log(employee.job);
console.log(employee.bonus());