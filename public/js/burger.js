$(document).ready(function () {

    var burgers = [];

    const unDevouredList = $("#undevouredList");
    const DevouredList = $("#devouredList");

    //Event Handler
    $(document).on("click", "button.devour", devourBurger);
    $(document).on("click", "button.addburger", addBurger);

    function getBurgers() {

        $.get("/api/burgers/?devoured=0", function (data) {
            burgers = data;

            console.log("UnDevoured Burgers Data", burgers);

            // Now generate buttons representing the burgers
            burgers.forEach(element => {
                var newListItem = $("<li>")
                var newButton = $("<button>");
                newButton.text(element.burger_name);
                newButton.addClass("devour btn btn-primary");

                newButton.prop('value', element.id);

                newListItem.append(newButton);
                unDevouredList.append(newListItem);
            });
        });

        $.get("/api/burgers/?devoured=1", function (data) {
            burgers = data;

            console.log("Devoured Burgers Data", burgers);

            // Now generate buttons representing the burgers
            burgers.forEach(element => {
                var newListItem = $("<li>")
                newButton.addClass("btn btn-primary");
                newButton.prop('value', element.id);
                newButton.attr('text', element.burger_name);

                newButton.on("click", function () {
                    console.log('click detected');
                });

                DevouredList.append(newListItem);
            });
        });
    }

    // Add event for 'add burger to undevoured list'
    function devourBurger() {
        var burgerID = $(this).attr('value');
        alert(`Devouring burger ${burgerID}`);
    }

    function addBurger() {

        var burgerName = "";

        if ($("#newburger option:selected").text() === "Please Select a Sandwich") {
            console.log('No action taken, nothing selected');
        } else {
            burgerName = $("#newburger option:selected").text();
            console.log(burgerName);
            var newBurger = {
                "burger_name": burgerName,
                "devoured": 0
            }
            console.log("New burger" + JSON.stringify(newBurger) +
                $("#newburger option:selected").text());

            $.post("/api/burgers", newBurger, function (result) {
                console.log(result);
            });
        }
        // re-render page
        window.location.reload();
    }

    // Add event for 'Delete Devoured Burger'


    // Iniital Run logic
    getBurgers();
});