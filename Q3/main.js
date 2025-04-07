// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class employee {
    
    person(name,id,salary,role){
        document.writeln("Name:"+ name+"<br>");
        document.writeln("Id:"+ id+"<br>");
        document.writeln("Salary:"+ salary+"<br>");
        document.writeln("Role:"+ role+"<br>");
    }
}

const emp1 = new employee();
const emp2 = new employee();
const emp3 = new employee();

document.writeln("<h2>First-Employee:</h2>")
emp1.person("Tarun","1","₹40000","Manager")

document.writeln("<h2>Second-Employee:</h2>")
emp2.person("Akshay","5","₹49000","Advertiser")

document.writeln("<h2>Third-Employee:</h2>")
emp3.person("tony","8","₹50000","Marketer")