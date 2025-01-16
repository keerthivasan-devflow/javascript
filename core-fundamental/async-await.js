
async function fetchapi(){
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const response = await data.json()
  console.log(response)
}

fetchapi()