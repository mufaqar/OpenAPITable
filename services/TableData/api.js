export const fetchProductionTableData = async () => {
  let current_url =
    process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    current_url = 'https://' + current_url;
  }
  try {
    const res = await fetch(current_url + `/api/indices/OpenApiTable`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHistoricTableData = async () => {
  let current_url =
    process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    current_url = 'https://' + current_url;
  }
  try {
    const res = await fetch(current_url + `/api/indices/Historic`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBetaTableData = async () => {
  let current_url =
    process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    current_url = 'https://' + current_url;
  }
  try {
    const res = await fetch(current_url + `/api/indices/Beta`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
