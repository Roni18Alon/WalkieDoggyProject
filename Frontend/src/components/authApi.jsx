import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const ROUTE = 'user';

const login = async (credentials) => {
  const url = 'https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/login';

  try {
    const response = await axios.get(url, {
      params: { "user_mail": credentials.user_email },
      headers: {
        "password": credentials.password
      },
    });
    console.log(response.status);
    // Get the response body
    const responseBody = response.data;
    console.log(response.data);

    // Return the response body
    return responseBody;
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};

export const useLoginMutation = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: response => {
      queryClient.setQueryData([ROUTE], response);
      onSuccess(response);
    }
  });
};


export const useGetUserQuery = () => useQuery({
  queryKey: [ROUTE],
  enabled: false
});
