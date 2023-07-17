import { Footer } from "./Footer";
import { Header } from "./Header";
import { Task } from "./Task";
import { TaskInput } from "./TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Task title="Read a book"></Task>
        <Task title="Take a shower"></Task>
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Kitpakorn Thongkot"
        studentId="650610749"
      ></Footer>
    </div>
  );
}
