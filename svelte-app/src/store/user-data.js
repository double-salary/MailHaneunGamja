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

export async function getUserId() {

  const userId = await getUserInfo().then(function (response) {
    return response.userId;
  });
  return userId;

}



export async function getUserAction() {

  const userId = await getUserId();

  try {
    // Uses fetch to call server
    const response = await fetch(`/api/accounts/${userId}`, {
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
    
  } catch {
    // If there is an error, display a generic message on the page
    console.log('User Profile Fetch Failed');
  }
}

export async function updateUserAction(userInfo) {

  const userId = await getUserId();

  try {
    // Uses fetch to call server
    const response = await fetch(`/api/accounts/${userId}`, {
      method: 'POST',
      body: JSON.stringify(userInfo), // put task in body
      headers: {
          'Content-Type': 'application/json' // indicate return type of JSON
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        return myJson; // return JSON 이 궁금할 경우 api/accounts/index.js 확인할 것
      });

    return response;
  } catch {
    // If there is an error, display a generic message on the page
    console.log('User Profile POST Failed');
  }
  
}