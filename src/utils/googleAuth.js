import axios from "axios";

export const getUrl = async (id) => {
  try {
    return await axios.get(`http://localhost:8000/auth`, {});
  } catch (error) {
    console.log(error);
  }
};

export const callbackBE = async (params) => {
  try {
    return await axios.get(`http://localhost:8000/callback${params}`, {
      headers: { accept: "application/json, text/plain, */*" },
    });
  } catch (error) {
    console.log(error);
  }
};
