const calculateDeduction = () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      arbeidsreiser: [
        { km: 91, antall: 180 },
        { km: 378, antall: 4 },
      ],
      besoeksreiser: [{ km: 580, antall: 4 }],
      utgifterBomFergeEtc: 4850,
    }),
  };
  fetch(
    "https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",
    requestOptions
  )
    .then(async (response) => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }

      this.travelDeduction = data.reisefradrag;
      console.log("Result should appear here");
      console.log(this.travelDeduction);
    })
    .catch((error) => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });
};

calculateDeduction();

module.exports = calculateDeduction;
