import axios from 'axios';

export default async function handler(req, res) {
  const indiceType = req.query.indiceType;
  try {
    const response = await axios({
      method: 'get',
      url: `https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/Indexes/index.json`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = process_github_index(indiceType, response.data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

function process_github_index(table, index) {
 
  let table_index = index[table];
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
