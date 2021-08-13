const url = "http://localhost:3000";
const headerGet = { headers: { "Content-Type": "application/json" } };

async function getList() {
  const listData = await fetch(url, headerGet)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  console.log(listData);
  return listData;
}

getList();
