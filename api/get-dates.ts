export default async function handler(req, res) {
  const { id } = req.query;
  const apikey = process.env.apikey;
  const url = process.env.url;
  const response =  await fetch(`${url}${id}`, {headers:{"x-api-key": `${apikey}`}})
  const data = await response.json();
  res.status(200).json(data);
}
