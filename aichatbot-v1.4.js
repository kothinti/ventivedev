$('.ai-form-block').on('keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){ 
            e.preventDefault();
            var userInput = $('.chat-input').val();
            
            if(userInput.length > 0){
                    
                    var newAiResponse;
                    var newUserInput = $('<div class="chat__user-input">').text(userInput);
                    $('.chat-container').append(newUserInput);

                    var airesloader = $('.chat__ai-response-loading').clone(); 
                    airesloader.css("display","block");
                    $('.chat-container').append(airesloader); 
                    
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
                            $('.chat-container .chat__ai-response-loading').remove();
                            newAiResponse = $('<div class="chat__ai-response-error">').text(response.status);
                            $('.chat-container').append(newAiResponse);
                            return response.json();
                    })
                    .then(data => {
                            console.log(data);
                            $('.chat-container .chat__ai-response-loading').remove();
                            newAiResponse = $('<div class="chat__ai-response">').text(data[0]);
                            $('.chat-container').append(newAiResponse);
                    })
                    .catch(error => {
                            $('.chat-container .chat__ai-response-loading').remove();
                            newAiResponse = $('<div class="chat__ai-response-error">').text(error);
                            $('.chat-container').append(newAiResponse);
                    });
                    return false;
            }
        }
});
