import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const ROUTE = 'dog';
const url = "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register-dog";

const addDog = async ({ user_email, ...newDog }) => {
  // Replace with your actual API endpoint URL
  const params = new URLSearchParams({
    user_mail: user_email,
  });

  try {
      const response = await axios.post(
          `${url}?${new URLSearchParams(params)}`,
          JSON.stringify(newDog),
          {
              headers: {
                  "Content-Type": "application/json",
              },
          }
      );
      return response;
  } catch (error) {
      console.log("Error:", error.message);
  }
}

export const useAddDogMutation = (onSuccess) =>
  useMutation({
    mutationFn: addDog,
    onSuccess
  });

export const useGetDogBreedsQuery = () =>
  useQuery({
    queryKey: [ROUTE, "breeds"],
    queryFn: async () => {
        try {
            const response = await fetch(
                "https://dog.ceo/api/breeds/list/all"
            );
            const jsonData = await response.json();
            const breedList = Object.keys(jsonData.message);

            return breedList;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
  });

  