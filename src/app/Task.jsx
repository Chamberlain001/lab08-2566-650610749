export const Task = (title) => {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom ">
      {title.map((task) => (
        <li>
          <span> {title.task} </span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </li>
      ))}
    </div>
  );
};
