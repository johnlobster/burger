// static javascript file included in rendered index.html

$(document).ready(function () {

    // set up devour buttons
    $(".devourMe").click( function (evt) {
        const burgerName = $(this).attr("data-val");
        const updateData = {
            name: burgerName,
            devour: true
        };
        $.ajax("/api/devour", {
            method: "PUT",
            data: JSON.stringify(updateData),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
            }
        )
        .then( (data) => {
            // check that data was updated ok

            // server will now regenerate and render index.html
            // true value forces cache empty
            location.reload(true);
        });
    });

    // form submit
    $("#submitButton").click( function (event) {
        event.preventDefault(); // stop from posting and reloading page
        console.log("Form submitted");
        // get and check name data
        const newBurgerName = $("#nameInput").val().trim();
        if (newBurgerName === "") {
            // no name entered, do not post form
        }
        else {
            // build object to be posted
            const postObject = {
                name: newBurgerName
            }

            // post to api and receive response from server
            $.ajax("/api/newBurger", {
                type: "POST",
                data: JSON.stringify(postObject),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done((data) => {
                // check that data was updated ok

                // server will now regenerate and render index.html
                // true value forces cache empty
                location.reload(true);
            });
        }
    });


}); // end document ready 