export enum URL {
  BASE_URL = 'https://something',
  FETCH_EMPLOYEE_URL = '/something',
  REMOVE_EMPLOYEE_URL = '/remove/something',
  ADD_EMPLOYEE_URL = '/add/',
  UPDATE_EMPLOYEE_URL = 'UPDATE_EMPLOYEE_URL',
}

export const requestData = async (
  url: string,
  data: { [key: string]: any }
) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}
