export default async function handler(req, res) {
  const { id } = req.query;
  const apikey = process.env.REACT_APP_API_KEY;
  const url = process.env.REACT_APP_API_URL;
  const response =  await fetch(`${url}${id}`, {headers:{"x-api-key": `${apikey}`}})
  const data = await response.json();
  res.status(200).json(data);
}
