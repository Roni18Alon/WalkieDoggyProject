import React from "react";


const ResultList = () => {
  /*const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetchQueriesFromAPIGateway();
        setQueries(response);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);

  const fetchQueriesFromAPIGateway = async () => {
    try {
      const response = await fetch("https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/search-test");
      if (!response.ok) {
        throw new Error("Failed to fetch queries");
      }
      const data = await response.json();
      return data.Items;
    } catch (error) {
      throw new Error("Error fetching queries: " + error.message);
    }
  }; */
  return (
    <>
      {/* Your existing code */}
      <div className="row">
        <div className="col-lg-12 card-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex align-items-center mb-4">
                    <h5 className="card-title">Results</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th>Avatar</th>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Salary</th>
                          <th>Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};
export default ResultList;