$(document).ready(function () {

    var burgers = [];
    // $("#undevourdList").append('Undevoured goes here!');
    // $("#devouredList").append('Devoured goes here!');

    const unDevouredList = $("#undevouredList");
    const DevouredList = $("#devouredList");


    function getBurgers() {

        $.get("/api/burgers/?devoured=0", function (data) {
            burgers = data;

            console.log("UnDevoured Burgers Data", burgers);

            // Now generate buttons representing the burgers
            burgers.forEach(element => {
                var newListItem = $("<li>")
                var newButton = $("<button>");

                newButton.addClass("btn btn-primary");
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
                var newButton = $("<button>");

                newButton.addClass("btn btn-primary");
                newButton.prop('value', element.id);
                newButton.innerHTML("BUTTON");

                newListItem.append(newButton);
                DevouredList.append(newListItem);
            });
        });

        // UnDevoured Burgers List
        // Add Event on Button
        // Event is AJAX call to server 

        // Devoured Burgers List
    }

    // Add event for 'add burger to undevoured list'

    // Add event for 'Delete Devoured Burger'


    getBurgers();
});