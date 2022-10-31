//problem 1
let employeeInfo = [
{
    "first name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": "40000",
    "raise eligible": "true"
},
{
    "first name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": "18500",
    "raise eligible": "true"
},
{
    "first name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": "21200",
    "raise eligible": "false"
}
]

console.log(employeeInfo);

//probem 2
let companyInfo = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "first name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raise eligible": true
        },
        {
            "first name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raise eligible": true
        },
        {
            "first name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raise eligible": false
        }
    ]
}

console.log(companyInfo);

//problem 3
let newEmployee = {
    "first name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise eligible": false
}
employeeInfo.push(newEmployee);
companyInfo.employees.push(newEmployee);

console.log(employeeInfo);
console.log(companyInfo);

//problem 4
totalSalary = 0;
for (let i=0; i<companyInfo.employees.length; i++){
    totalSalary += companyInfo.employees[i].salary;
}

console.log(totalSalary);

//problem 5
for (let i=0; i<companyInfo.employees.length; i++){
    if (companyInfo['employees'][i]['raise eligible'] == true) {
        companyInfo['employees'][i]['salary'] = companyInfo['employees'][i]['salary'] + (companyInfo['employees'][i]['salary']*.1);
        companyInfo['employees'][i]['raise eligible'] = false;
    }
    else {
        companyInfo['employees'][i]['salary']
    }
}
console.log(companyInfo)

//problem 6
let workHome = ['Anna', 'Sam'];

for (let i=0; i<companyInfo.employees.length; i++){
    for (let n=0; n<workHome.length; n++) {
        if (companyInfo['employees'][i]['first name'].includes(workHome[n])) {
            companyInfo['employees'][i]['wfh'] = true;
        }
        else {
            companyInfo['employees'][i]['wfh'] = false; 
        }
    }
    n=1;
}

console.log(companyInfo);
