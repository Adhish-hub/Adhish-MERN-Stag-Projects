import StudentList from "./components/StudentList";
import TopperBadge from "./components/TopperBadge";
import SkillList from "./components/SkillList";


const App = () => {
    const students = [
        {
            id: 1,
            name: "Aman Sharma",
            age: 21,
            course: "BCA",
            skills: ["HTML", "CSS", "REACT"],
            isTopper: true,
        },

        {
            id: 2,
            name: "Adhish Tiwari",
            age: 24,
            course: "MCA",
            skills: ["TYPESCRIPT", "Node.JS"],
            isTopper: false,   
        },
    ];
    return(
        <div className="min-h-screen bg-gray-900 text-white p-10">
            <h1 className="text-4xl font-bold text-center mb-10">Student Profile Cards</h1>
            <StudentList
              students = {students}
              BadgeComponent = {TopperBadge}
              SkillsComponent = {SkillList} 
            />
        </div>
    )
}
 export default App; 