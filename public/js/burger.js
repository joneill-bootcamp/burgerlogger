$(document).ready(function () {

    var burgers = [];

    const unDevouredList = $("#undevouredList");
    const DevouredList = $("#devouredList");

    //Event Handlers
    $(document).on("click", "button.devour", devourBurger);
    $(document).on("click", "button.undevour", unDevourBurger);
    $(document).on("click", "button.addburger", addBurger);

    function getBurgers() {

        $.get("/api/burgers", function (data) {
            burgers = data;

            console.log(" Burgers Data", burgers);

            // Now generate buttons representing the burgers, single AJAX call and parse responses accordingly
            burgers.forEach(element => {
                var newListItem = $("<li>")
                var newButton = $("<button>");
                newButton.text(element.burger_name);
                newButton.prop('value', element.id);
                newListItem.append(newButton);
                if (!element.devoured) {
                    newButton.addClass("devour btn btn-primary");
                    unDevouredList.append(newListItem);
                } else {
                    newButton.addClass("undevour btn btn-primary");
                    DevouredList.append(newListItem);
                }

            });
        });
    }

    // Add event for 'add burger to devoured list'
    function devourBurger() {
        var burgerID = $(this).attr('value');
        //alert(`Devouring burger ${burgerID}`);

        var putBurger = {
            "id": burgerID,
            "devoured": 1
        }

        $.ajax({
            "url": "/api/burgers",
            "type": "PUT",
            "data": putBurger,
            "success": function (data) {
                console.log(data);
            }
        }).then(function () {
            location.reload();
        });
    }

    // Add event to 'undevour burger'
    function unDevourBurger() {
        var burgerID = $(this).attr('value');
        //alert(`Devouring burger ${burgerID}`);

        var putBurger = {
            "id": burgerID,
            "devoured": 0
        }

        $.ajax({
            "url": "/api/burgers",
            "type": "PUT",
            "data": putBurger,
            "success": function (data) {
                console.log(data);
            }
        }).then(function () {
            location.reload();
        });
    }

    function addBurger() {

        var burgerName = "";

        if ($("#newburger option:selected").text() === "Please Select a Burger") {
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
            }).then(function () {
                location.reload();
            });
        }
    }

    // Iniital Run logic
    getBurgers();
});