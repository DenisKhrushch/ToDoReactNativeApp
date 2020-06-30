export const sendRequest = (
  method: string,
  url: string,
  token: string,
  body: {} | null,
) => {
  if (method === 'POST') {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json().then(data => data))
      .catch(e => console.log(e));
  } else if (method === 'GET') {
    return fetch(url, {
      headers: {Authorization: 'Bearer ' + token},
    }).then(response => response.json());
  }
};

export const userRequest = (url: string, body: {} | null) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => {
      const result = {responseStatus: response.status, data: {}};
      return response.json().then(data => {
        result.data = data;
        return result;
      });
    })
    .catch(e => console.log(e));
};
