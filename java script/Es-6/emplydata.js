
let employees =[{id:101, name:"Radha", sal:40000},
{id:102, name:"Raksha", sal:50000},
{id:103, name:"Rekha", sal:60000},
{id:104, name:"Reeda", sal:70000},
{id:105, name:"Radhika", sal:80000}]

function employeedata(){
    let rows =""
    for (employee of employees){
        rows = rows + `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.sal}</td>
        </tr>`
    }
    document.getElementById('tbody_data').innerHTML= rows
}