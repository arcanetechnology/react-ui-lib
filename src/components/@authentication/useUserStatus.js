// import { useEffect, useMemo, useState } from 'react';

// const USER_NOT_CREATED_STATUS_CODE = 404;

// /**
//  * Calls the user endpoint with the given firebase token, returns user details.
//  */
// const useUserStatus = (token) => {
//   const [serverData, setServerData] = useState();

//   useEffect(() => {
//     async function fetchData() {
//       const endpointData = await callUserEndpoint({ token });

//       setServerData({
//         ...endpointData,
//         responseStatus: endpointData.response.status
//       });
//     }

//     token && fetchData();
//   }, [token]);

//   const userStatus = useMemo(() => {
//     if (!serverData) {
//       return null;
//     }

//     const { result, responseStatus } = serverData;

//     return {
//       error: responseStatus >= 400 && responseStatus !== USER_NOT_CREATED_STATUS_CODE,
//       userNotCreated: responseStatus === USER_NOT_CREATED_STATUS_CODE,
//       result
//     };
//   }, [serverData]);

//   return userStatus;
// };

// const callUserEndpoint = async ({ token }) => {
//   const url = new URL('https://api.arcane.no/user');

//   const headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   headers.append('Authorization', `Bearer ${token}`);

//   const response = await fetch(url.toString(), {
//     headers
//   });

//   const result = response.status >= 200 && response.status <= 299
//     ? await response.json():
//     null;

//   return {
//     result,
//     response
//   };
// };

// export default useUserStatus;
