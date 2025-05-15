"use strict";
$(document).ready(function () {



$('.btn').click(function (e) {
    e.preventDefault();
    
    let a = (a) => {
        if (!$.trim($("#inputme").val()) == ' ')
            for (let i = a; i <=a; i++) {
                $('.col-md-12').append(`<div class="minibox"> <h1>${i}</h1> </div>`);
            }
    }

    a($('input').val())
    $("#inputme").val("")
    
});


    
});

