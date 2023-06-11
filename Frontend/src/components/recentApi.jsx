import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUserList = (userEmail) => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (userEmail) {
                try {
                    const response = await axios.get(
                        "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/recent",
                        {
                            params: { user_mail: userEmail },
                        }
                    );
                    const fetchedUserList = JSON.parse(JSON.stringify(response.data.body));
                    setUserList(fetchedUserList);
                    setLoading(false);
                } catch (error) {
                    setError(error.response);
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [userEmail]); // Add userEmail as a dependency

    return { userList, loading, error };
};

export default useFetchUserList;
