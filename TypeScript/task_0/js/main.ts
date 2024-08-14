interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const ligne = document.createElement("tr");
  const cellFirstname = document.createElement("td");
  const cellLocation = document.createElement("td");

  cellFirstname.textContent = student.firstName;
  cellLocation.textContent = student.location;

  ligne.appendChild(cellFirstname);
  ligne.appendChild(cellLocation);
  tbody.appendChild(ligne);
});

table.appendChild(tbody);
document.body.appendChild(table);

export default Student;