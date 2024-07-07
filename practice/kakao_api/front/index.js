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
