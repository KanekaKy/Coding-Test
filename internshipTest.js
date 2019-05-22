<script>
//To-do 1
const employeesArray = [{   
  name: "Oscar Martinez",
     department: "Accounting" 
},   {   
  name: "Michael Scott",
     department: "Sales" 
},
{   
  name: "Jim Halpert",
     department: "Sales" 
},{   
  name: "Pam Beezley",
     department: "Reception" 
},
{   
  name: "Kevin Malone",
     department: "Accounting" 
},
{   
  name: "Dwight Schrute",
     department: "Sales" 
},
{   
  name: "Andy Bernard",
     department: "Sales" 
},
{   
  name: "Angela Martin",
     department: "Accounting" 
},
{   
  name: "Erin Hannon",
     department: "Reception" 
},
{   
  name: "Toby Flenderson",
     department: "Human Resources" 
},{   
  name: "Stanley Hudson",
     department: "Sales" 
},{   
  name: "Jan Levinson",
     department: "Corporate" 
},{   
  name: "Creed Bratton",
     department: "Support" 
},{   
  name: "Ryan Howard",
     department: "Temps and Interns" 
},{   
  name: "Darryl Philbin",
     department: "Warehouse" 
},{   
  name: "Holly Flax",
     department: "Human Resources" 
},{   
  name: "Meredith Palmer",
     department: "Support" 
},{   
  name: "Kelly Kapoor",
     department: "Support" 
},{   
  name: "Gabe Lewis",
     department: ["Human Resources", "Temps and Interns"] 
},{   
  name: "Robert California",
     department: "Corporate" 
},{   
  name: "Phyllis Vance",
     department: "Sales" 
},{   
  name: "Roy Anderson",
     department: "Warehouse" 
},{   
  name: "Peter Miller",
     department: "Temps and Interns" 
},{   
  name: "Clark Green",
     department: "Support" 
},]; 
const remainingEmployeesArray = ["Jim Halpert", "Pam Beezley", "Kevin Malone", "Dwight Schrute", "Andy Bernard", "Angela Martin", "Erin Hannon", "Toby Flenderson", "Stanley Hudson", "Jan Levinson", "Creed Bratton", "Ryan Howard", "Darryl Philbin", "Holly Flax", "Meredith Palmer", "Kelly Kapoor", "Gabe Lewis", "Robert California", "Phyllis Vance", "Roy Anderson", "Peter Miller", "Clark Green"]; 
let firstNamesArray = [];
let lastNamesArray = [];
let departmentsCount = {}; 
//To-Do 2
function processAllEmployees(employeesArray){
	console.log (employeesArray);
}
processAllEmployees(employeesArray);
//To-do 3
function splitFullName(fullName) {

var arr = fullName.split(" ");
firstNamesArray.push(arr[0]);
lastNamesArray.push(arr[1]);
}
for (i = 0; i < employeesArray.length; i++) { 
var fullName = employeesArray[i].name;
var department= employeesArray[i].department;
if(department != "Corporate"&& department != "Human Resources"){
  splitFullName(fullName);
}
}
//To-do 4
function printOutFirstNames() {
for (i = 0; i < employeesArray.length; i++) { 
var fullName = employeesArray[i].name;
var arr = fullName.split(" ");
console.log(arr[0]);
}
}
</script>
