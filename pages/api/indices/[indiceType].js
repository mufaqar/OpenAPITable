import axios from 'axios';

export default async function handler(req, res) {
  const indiceType = req.query.indiceType;
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.github.com/repos/tmforum-rand/api_table_docs/contents/index.json`,
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    let data = process_github_index(indiceType, response.data.content);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
}

function process_github_index(table, index) {
  let index_json = JSON.parse(Buffer.from(index, 'base64').toString('ascii'));
  let table_index = index_json[table];
  let flat_index = [];
  Object.values(table_index).forEach((api) => {
    api.forEach((entry) => {
      let description = entry.api_description;
      delete entry.api_description;
      flat_index.push({ ...description, ...entry });
    });
  });

  return flat_index;
}
