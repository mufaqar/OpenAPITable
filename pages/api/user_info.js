import axios from 'axios';

export default async function handler(req, res) {
  let token = JSON.parse(req.body?.access_token);

  if (req.method === 'POST' && token) {
    axios({
      method: 'GET',
      url: `https://tmforumhubdev.mvine.com/idp/oidc/userinfo`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => {
        res.status(200).json(r.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  }
}
