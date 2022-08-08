// Write your solution in this file!
let employee = {name:'John',
streetAddress:1};


function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee}
    newEmployee[key]=value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let nEmployee = {...employee}
    delete nEmployee[key]
    return nEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}