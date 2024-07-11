const regist = document.forms.registForm;

regist.id.oninput = (e) => {
  console.log(e.target.value);
};

regist.onsubmit = async (e) => {
  e.preventDefault();
  //   console.log("왜안됌!!!!!!!!!");
  console.log(regist.id.value);

  try {
    const registdata = await axios.post(
      "http://localhost:8000/regist/",
      {
        user_id: regist.id.value,
        password: regist.password.value,
        // location: regist.location.value,
      },
      { withCredentals: true }
    ).data;
  } catch (err) {
    console.log(err);
  }
};
