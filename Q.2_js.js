async function fetchEmployee() {
    let res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=5&sort=salary&order=asc&filterBy=department&filterValue=finance');
    let data = await res.json();
    return data;
}
function employee(name, gender, salary) {
    return {
        name: name,
        gender: gender,
        salary: salary,

        getinfo: function () {
            return `name: ${this.name}, gender: ${this.gender}, salary: ${this.salary}`;
        },

        incSalary: function () {
            return ++this.salary
        },

        decSalary: function () {
            return --this.salary
        }
    }

}


function manager(name, gender, salary, department) {
    let manObj = employee(name, gender, salary)

    manObj.department = department,


        manObj.displayDepartment = function () {
            return `Department: ${this.department}`
        },

        manObj.manggetinfo = function () {
            return `name: ${this.name}, gender: ${this.gender}, salary: ${this.salary}, Department: ${this.department}`;
        }
    return manObj
}

async function createEmp(id) {
    let info = await fetchEmployee(id);
    let emp = employee(info.data[id].name, info.data[id].gender, info.data[id].salary);

    let man = manager(info.data[id].name, info.data[id].gender, info.data[id].salary, info.data[id].department)
    // function highSalary(info) {
    //     return info.filter((x) =>x.salary>=30000)
    // }

    // console.log(man.displayDepartment())
    console.log(man.manggetinfo())

    // console.log(highSalary(info.data))
    // console.log(emp.getinfo());
    // console.log(emp.incSalary());
    // console.log(emp.incSalary());
    // console.log(emp.incSalary());
    console.log(emp.getinfo());



}
createEmp(1);
