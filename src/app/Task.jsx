export const Task = () => {
  const tasks = ["Read a book", "Take a shower", "Sleep"];
  return (
    <div>
      {tasks.map((task, i) => (
        <li key={i}>
          <span> {task} </span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </li>
      ))}
    </div>
  );
};
