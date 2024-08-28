class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

// Creating Employee objects
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

// Adding all employees to an array
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(" ");
console.log("1.Sort the arrayEmployees in descending order of Employee Id's and log employee details → Id, Name, Department");
console.log(" ");


const sortedByIdDesc = arrayEmployees.sort((a, b) => b.emp_id - a.emp_id);
console.log("Employees sorted by ID in descending order:");
sortedByIdDesc.forEach(emp => {
    console.log(`ID: ${emp.emp_id}, Name: ${emp.emp_name}, Department: ${emp.emp_dept}`);
});

console.log(" ");
console.log(" 2. Sort the arrayEmployees in ascending order of employee department & log Id, dept, & Company");
console.log(" ");


const sortedByDeptAsc = arrayEmployees.sort((a, b) => {
    if (a.emp_dept < b.emp_dept) return -1;
    if (a.emp_dept > b.emp_dept) return 1;
    return 0;
});
console.log("\nEmployees sorted by Department in ascending order:");
sortedByDeptAsc.forEach(emp => {
    console.log(`ID: ${emp.emp_id}, Department: ${emp.emp_dept}, Company: ${emp.emp_company}`);
});


console.log(" ");
console.log("3. Sort the employee array in descending order of employee salary and log Name, Salary & Company");
console.log(" ");


const sortedBySalaryDesc = arrayEmployees.sort((a, b) => b.emp_salary - a.emp_salary);
console.log("\nEmployees sorted by Salary in descending order:");
sortedBySalaryDesc.forEach(emp => {
    console.log(`Name: ${emp.emp_name}, Salary: ${emp.emp_salary}, Company: ${emp.emp_company}`);
});
