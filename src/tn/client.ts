export async function tnFetch(params: {
  store_id: number;
  access_token: string;
  path: string;
  method?: string;
  body?: any;
}) {
  const url = `https://api.tiendanube.com/v1/${params.store_id}${params.path}`;

  const res = await fetch(url, {
    method: params.method ?? "GET",
    headers: {
      Authentication: `bearer ${params.access_token}`,
      "Content-Type": "application/json",
      "User-Agent": "tn-combos (local-dev)",
    },
    body: params.body ? JSON.stringify(params.body) : undefined,
  });

  return res;
}
