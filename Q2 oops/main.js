class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  }
  
  class Department {
    constructor() {
      this.employees = [];  
    }
    setEmployee(employee) {
      this.employees.push(employee);
    }    
    getEmployeeNames() {
      return this.employees.map(employee => employee.name);  
    }
  } 
  
  const department = new Department();
  
  const employee1 = new Employee("steve", "Manager","<br>");
  const employee2 = new Employee("Alex", "Recruiter","<br>");
  
  department.setEmployee(employee1);
  department.setEmployee(employee2);
  
  document.writeln(department.getEmployeeNames());