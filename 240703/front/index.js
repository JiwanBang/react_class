const Input = document.getElementById("TodoInput");
let page = 1;
let count = 20;
let pageidx = 0;
(async () => {
  try {
    const todopage = (
      await axios.get("http://localhost:8000/", {
        withCredentials: true,
      })
    ).data;
    console.log(todopage);
  } catch (err) {
    console.error(err);
  }
})();

const getPaging = async () => {
  try {
    for (let i = (page - 1) * count; i < page * count; ++i) {
      //Todo 목록 페이징(innerHTML)
    }
  } catch (err) {
    console.log(error);
  }
};
getPaging();

const content = document.getElementById("content");
const priority = document.getElementById("priority");
const limit = document.getElementById("limit");

content.onInput = (e) => {
  console.log(e.target.value);
};

Input.onsubmit = async (e) => {
  e.preventDefault();
  try {
    const addTodo = (
      await axios.post(
        "http://localhost:8000/add",
        {
          content: Input.content.value,
          priority: Input.priority.value,
          limit: Input.limit.value,
        },
        {
          withCredentials: true,
        }
      )
    ).data;
    console.log(addTodo);
    // location.href = "http://localhost:8080";
  } catch (err) {
    console.error(err);
  }
};
