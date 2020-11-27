export function callApi(endPoint){
    fetch(`http://localhost:3001/api/${endPoint}`)
    .then((data)=>data.json())
    .then(_getResponse)
} 
async function _getResponse(res){
    const json = await res.json();

  if (!json.status) {
    return Promise.reject({
      message: json.message
    });
  }

  return json;
}