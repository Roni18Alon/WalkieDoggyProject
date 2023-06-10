import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

const ROUTE = 'user';

const login = async (credentials) => {
  const url = 'https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/login';

  try {
    const response = await axios.get(url, {
      params: { "user_mail": credentials.user_email },
      headers: {
        "password": credentials.password
      }
    });

    console.log(response.status);
    const responseBody = response.data;

    const walkieDoggyCookie = response.data.body[0].token;

    console.log('Extracted cookie:', walkieDoggyCookie);
    Cookies.set('walkieDoggy', walkieDoggyCookie, { expires: 7, path: '/' });

    return responseBody;
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};


export const useLoginMutation = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation(login, {
    onSuccess: (responseBody) => {
      queryClient.setQueryData([ROUTE], responseBody);
      onSuccess(responseBody);
    },
  });
};


export const useGetUserQuery = () =>
  useQuery({
    queryKey: [ROUTE],
    queryFn: login,
    enabled: false,
  });


