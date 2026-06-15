class student{
    constructor(name,rollno,cgpa,year,department)
    {
        this.name = name,
        this.rollno = rollno,
        this.cgpa = cgpa,
        this.year = year,
        this.department = department 
    }

    getCard()
    {
        return `
        <div class = "container">
        <p>${this.name}</p>
        <p>rollno : ${this.rollno}</p>
        <p>cgpa : ${this.cgpa}</p>
        <p>year : ${this.year}</p>
       <p> Department:${this.department}</p>
       </div>`
    }
}

const students = [
    new student("Nivetha","717824E236",8,3,"EEE"),
    new student("Dhanyuka","71824E237",9,3,"EEE"),
    new student("SriNithi","717824E238",9,3,"EEE")
]

const container = document.getElementById("students");

students.forEach(student =>{container.innerHTML+=
    student.getCard();
})

