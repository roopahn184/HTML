let employees = [
    {id:101, name:"rahul gandi", sal:45000},
    {id:102, name:"rekha gandi", sal:55000}
]

  let createEmployee = (emp) => {
 setTimeout(() => {
    employees.push(emp)
 }, 4000)
}
  let getEmployees = () => {
    console.log("get employee fun");
 setTimeout(() => {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.sal}</td>
        </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
 }, 2000);
}
createEmployee ({id:103, name:"priyanka", sal:65000})
getEmployees()
