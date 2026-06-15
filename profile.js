const student = [
    {
        name :"Nivetha S",
        roll_no:101,
        age : 19,
        Department :"EEE",
        Year :3,
        cgpa : 8

    },
    {
        name :"Dhanyuka",
        roll_no : 102,
        age : 19,
        Department:"CSE",
        Year :3,
        cgpa : 8.5
    },

    

]
const container = document.getElementById("students");
student.forEach(student => {
    container.innerHTML += `
    <div class ="card">
    <h2>Name : ${student.name}</h2>
    <p>Roll No : ${student.roll_no}</p>
    <p>Age : ${student.age}</p>
    <p>Department :${student.Department}</p>
    <p>Year : ${student.Year}</p>
    <p>CGPA : ${student.cgpa}</p>`
    
})

