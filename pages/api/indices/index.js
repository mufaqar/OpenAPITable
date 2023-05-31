import axios from 'axios';

export default async function handler(req, res) {
  axios({
    method: 'get',
    url: `https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/Indexes/index.json`,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((r) => {
      res.status(200).json(r.data);
      
    })
    .catch((err) => {
      res.status(200).json(err);
    });
}
