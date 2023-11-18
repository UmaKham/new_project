import axios from 'axios'
const base_url = import.meta.env.VITE_BASE_URL

export async function getData(resource) {
  try{
    const res = await axios.get(base_url + resource)

    return res
  } catch(e) {
    console.log(e);
    return null
  }
}

export async function postData(resource, body) {
  try{
    const res = await axios.post(base_url + resource, body)
  
    return res
  } catch(e) {
    console.log(e);
    return null
  }
}

export async function editData(resource, body) {
  try{
    const res = await axios.patch(base_url + resource, body)
  
    return res
  } catch(e) {
    console.log(e);
    return null
  }
}