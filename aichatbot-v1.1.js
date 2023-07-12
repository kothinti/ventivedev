$('.ai-form-block').on('keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){ // 13 is the code for Enter
            e.preventDefault();

            var apiendpoint = "https://chatai.ventive.app/api/inquiry?dataset=striketax.com";
            var bearer = 'Bearer  qSaMJJXPlvtl52o5FaIeZJqHWSJnEqs25hy4N0sJ';
            
            var data = {
              question: 'What is the R&D Tax credit in New York?'
            };
            
            fetch(apiendpoint, {
            method: 'POST', // use POST, PUT, PATCH methods to send body data
            headers: {
              'Authorization': bearer,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // convert the data object into a string
            })
            .then(response => {
            if (!response.ok) {
              throw new Error("HTTP status " + response.status);
            }
            return response.json();
            })
            .then(data => {
            console.log(data);
            })
            .catch(error => console.error(error));
          
            return false;
        }
});
