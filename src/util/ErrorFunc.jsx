const ErrorFunc = (state, ref) => {
  const todo = {
    title: "",
    date: "",
    file: [],
    category: "",
    todo: "",
  };

  if (state === todo.title && todo.title.trim().length === 0) {
    return { message: "Please fill in the title.", ref };
  }
  if (state === todo.date && todo.date.trim().length === 0) {
    return { message: "Please fill in the date.", ref };
  }
  if (state === todo.category && state.trim().length === 0) {
    return { message: "Please select the category.", ref };
  }
  if (state === todo.todo && state.trim().length === 0) {
    return { message: "Please fill in the todo field.", ref };
  }
  if (todo.file.length < 1) {
    return { message: "Please add a file.", ref };
  }

  return null;
};

export default ErrorFunc;
