import API from './config';


export async function getUserInfo() {
  try {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
  } catch (error) {
    console.error('No profile could be found');
    return undefined;
  }
}

export const userId = await getUserInfo().then(function (response) {
  return response.userId;
});


export async function getUserAction() {

  try {
    // Uses fetch to call server
    const response = await fetch(`${API}/accounts/${userId}`, {
      method: 'GET',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        return myJson; // return JSON 이 궁금할 경우 api/accounts/index.js 확인할 것
      });

    return response;
  } 
  catch {
    // If there is an error, display a generic message on the page
    console.log('User Profile Fetch Failed');
  }
}

export async function updateUserAction(userInfo) {
  try {
    const response = await fetch(`${API}/accounts/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      return myJson;
    });
    return response;
  } 
  catch {
    // If there is an error, display a generic message on the page
    console.log('User Profile Update Failed');
  }
}