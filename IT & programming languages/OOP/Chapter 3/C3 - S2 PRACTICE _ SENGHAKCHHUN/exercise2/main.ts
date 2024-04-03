import { Student } from "./school";
import { Classroom } from "./school";
import { School } from "./school";

let student1 = new Student("Hak", "C");
let student2 = new Student("Roth", "S");
let student3 = new Student("Veak", "K");
let student4 = new Student("Chem", "S");

let pnc = new School("PNC");
let pnp = new School("PNP");

let node = new Classroom( pnc , "Node js");
let php = new Classroom( pnp , "PHP");

node.addStudent(student1)
node.addStudent(student2)

php.addStudent(student3)
php.addStudent(student4)

pnc.addClassroom("Node js");
pnp.addClassroom("php");
