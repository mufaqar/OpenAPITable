export const fetchUserInfo = async (token) => {
  const response = await fetch(
    `https://tmforumhubdev.mvine.com/idp/oidc/userinfo`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};
