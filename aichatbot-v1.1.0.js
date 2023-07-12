$('.ai-form-block').on('keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){ 
            e.preventDefault();
            var userInput = $('.chat-input').val();
            
            if(userInput.length > 0){
                    
                    var newUserInput = $('<div class="chat__user-input">').text(userInput);
                    $('.chat-container').append(newUserInput);
                    
                    var apiendpoint = "https://chatai.ventive.app/api/inquiry?dataset=striketax.com";
                    var bearer = 'Bearer  qSaMJJXPlvtl52o5FaIeZJqHWSJnEqs25hy4N0sJ';
                    
                    var data = {
                      question: userInput
                    };
                    
                    fetch(apiendpoint, {
                            method: 'POST', 
                            headers: {
                              'Authorization': bearer,
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data) 
                    })
                    .then(response => {
                            if (!response.ok) {
                              throw new Error("HTTP status " + response.status);
                            }
                            return response.json();
                    })
                    .then(data => {
                            console.log(data);

                            var newAiResponse = $('<div class="chat__ai-response">').text(data[0]);
                            $('.chat-container').append(newAiResponse);
                    })
                    .catch(error => console.error(error));
                    return false;
            }
        }
});
