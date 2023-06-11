import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const ROUTE = "edit";

const editProfile = async (profileData, user_email) => {
  console.log(user_email);

  const url =
    "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/edit";
  const params = new URLSearchParams({
    user_mail: user_email,
  });
  try {
    const response = await axios.post(
      `${url}?${params}`,
      JSON.stringify(profileData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // Get the response body
    const responseBody = response.data;
    console.log(response.data);

    // Return the response body
    return responseBody;
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};

// Existing code...

export const useEditProfileMutation = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProfile,
    onSuccess: (response) => {
      queryClient.setQueryData([ROUTE], response);
      onSuccess(response);
    },
  });
};
