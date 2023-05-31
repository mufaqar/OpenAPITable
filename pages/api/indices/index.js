import axios from 'axios';

export default async function handler(req, res) {
  axios({
    method: 'get',
    url: `https://api.github.com/repos/tmforum-rand/api_table_docs/contents/table_generator/data/indexes/Beta_description_index.json`,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
    .then((r) => {
      r.data.content = JSON.parse(
        Buffer.from(r.data.content, 'base64').toString('ascii')
      );
      console.log(r.data);
      res.status(200).json(r.data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
}
