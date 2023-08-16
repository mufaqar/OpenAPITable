export const fetchProductionTableData = async () => {
  let current_url =
    process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    current_url = 'https://' + current_url;
  }
  try {
    const res = await fetch(
      current_url + `/oda/open-apis/table/api/indices/OpenApiTable`
    );
    const data = await res.json();
    const returnData = data.filter((item) => item.options.length === 6)
    return returnData;
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
    const res = await fetch(
      current_url + `/oda/open-apis/table/api/indices/Historic`
    );
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
    const res = await fetch(
      current_url + `/oda/open-apis/table/api/indices/Beta`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
