import axios from "axios";

export const fetchDataFromApi = async (url) => {
  const params = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_STRIPE_APP_KEY}`,
    },
  };

  try {
    const { data } = await axios.get(`${import.meta.env.VITE_DEV_URL}${url}`, params);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: `${import.meta.env.VITE_DEV_URL}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRIPE_APP_KEY}`,
  },
});
