import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

const ROUTE = 'user-info';

const getUserInfo = async () => {
    const url_token = "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/user-info";
    const walkieDoggy = Cookies.get("walkieDoggy");
    const params = {
        user_id: walkieDoggy,
    };
    try {
        //`${url_token}?${new URLSearchParams(params)}`
      const response = await axios.get(`${url_token}?${new URLSearchParams(params)}`, 
     );
  
      const {data: userInfoData} = response;
      console.log("responseData--------------------------- " + response.status);
      console.log(userInfoData);
      console.log("responseData---------------------------");
      console.log(userInfoData);
      console.log("In getUserInfo---------------------------");
      console.log("In getUserInfo---------------------------");
      console.log("In getUserInfo---------------------------");

      console.log("In getUserInfo---------------------------");
      console.log(userInfoData);

      console.log(userInfoData.body[0]);
      console.log(userInfoData.body[0]);
      console.log("In getUserInfo---------------------------");
      console.log("In getUserInfo---------------------------");
      console.log("In getUserInfo---------------------------");
      return userInfoData;
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  };



export const useUserInfoMutation = (onSuccess) => {
    const queryClient = useQueryClient();
  
    return useMutation(getUserInfo, {
      onSuccess: (responseBody) => {
        queryClient.setQueryData([ROUTE], responseBody);
        onSuccess(responseBody);
      },
    });
  };


export const useGetUserInfoQuery = () =>
  useQuery({
    queryKey: [ROUTE],
    queryFn: getUserInfo,
    enabled: true,
  });