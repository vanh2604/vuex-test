import axios from "axios";
export const getAllUsers = async () => {
  const { data } = await axios.get(
    "https://6149c16307549f001755a57f.mockapi.io/users"
  );
  return data;
};
