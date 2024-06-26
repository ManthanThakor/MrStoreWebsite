// import axios from "axios";

// export const fetchDataFromApi = async (url) => {
//   const params = {
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
//     },
//   };

//   try {
//     const { data } = await axios.get(
//       `${process.env.REACT_APP_DEV_URL}${url}`,
//       params
//     );
//     return data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

import axios from "axios";

export const fetchDataFromApi = async (url) => {
  const params = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_STRIPE_APP_KEY}`,
    },
  };

  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_DEV_URL}${url}`,
      params
    );
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
