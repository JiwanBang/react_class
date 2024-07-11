(async () => {
  try {
    const idList = (
      await axios.get("http://localhost:8000/", {
        withCredentials: true,
      })
    ).data;
    console.log(idList);
  } catch (err) {
    console.error(err);
  }
})();

const loginForms = document.forms.loginForm;

loginForms.id.oninput = (e) => {
  console.log(e.target.value);
};

loginForms.onsubmit = async (e) => {
  e.preventDefault();
  console.log(loginForms.id.value);
  try {
    const logindata = await axios.post(
      "http://localhost:8000/login",
      {
        user_id: loginForms.id.value,
        password: loginForms.password.value,
      },
      { withCredentials: true }
    ).data;
  } catch (err) {
    console.error(err);
  }
};
