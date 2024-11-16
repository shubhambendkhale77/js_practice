function employee(name,age,salary){
    return{
        name:name,
        age:age,
        salary:salary,
    
        displayName:function(){
            return `Name: ${this.name} age: ${this.age} salary:${this.salary}`
        },
    
    increaseAge:function(){
    return ++this.age
    },
    
    decreaseAge:function(){
        return --this.age
    }
        
    }
    
    }
    
    
    
    let emp=employee("Shubham",22,80000)
    console.log(emp.displayName())
    console.log(emp.increaseAge())
    console.log(emp.increaseAge())
    console.log(emp.decreaseAge())
    
    function manager(name,age,salary,department){
        let managerObj=employee(name,age,salary)
    
        managerObj.department=department,
        managerObj.displayDepartment=function(){
        return `${this.department}`
        },
    
        managerObj.increaseSalary=function(){
            return ++this.salary
        },
    managerObj.decreaseSalary=function(){
        return --this.salary
    }
    return managerObj
    }
    
    
    
    
    
    let manager1=manager("Bendkhale",35,50000,"Software")
    console.log(manager1.displayName())
    console.log(manager1.increaseAge())
    console.log(manager1.increaseAge())
    console.log(manager1.decreaseAge())
    console.log(manager1.decreaseSalary())
    console.log(manager1.increaseSalary())
    
    