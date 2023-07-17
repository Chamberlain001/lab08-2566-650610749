import { Header } from "./Header";
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
        <Task></Task>
      </div>

      {/* //footer section */}
      <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © 2023 Kitpakorn Thongkot 650610749
        </p>
      </div>
    </div>
  );
}
