export enum URL {
  BASE_URL = 'https://employeemanagerapi.herokuapp.com/employees',
}

export const requestData = async (
  url: string,

  data: any,
  method: string = 'POST'
) => {
  const extraData: { [key: string]: any } = {
    method: method,

    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PATCH') {
    extraData.body = JSON.stringify(data)
  }

  const response = await fetch(url, extraData)

  return await response.json()
}
