class User
{
    constructor(name,roll_no,age,year,department)
    {
        this.name = name;
        this.roll_no = roll_no;
        this.age = age;
        this.year = year;
        this.department = department;
    }

    displayInfo()
    {
        const {name,roll_no,age,year,department} = this;
        return `<h3>${name}</h3>
        <p>${roll_no}</p>
        <p>${age}</p>
        <p>${year}</p>
        <p>${department}</p>
        `;
    }
}

const users = [
     new User("Nivetha","717824E236",19,3,"EEE"),
     new User("Dhanyuka","717824E237",19,3,"EEE"),
     new User("Srinithi","71824E235",19,3,"EEE")
]
const  container = document.getElementById("dashboard");
users.forEach(user => {
    container.innerHTML += user.displayInfo();
})