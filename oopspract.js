class Student{
setDetails(){
    this.id=101;
    this.name="Siva";
    this.grade="A";

}
display(){
    console.log(this.id,+" "+this.name,this.grade");
}
}
let student=new Student();
student.setDetails();
student.display();
