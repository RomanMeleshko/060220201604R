$( document ).ready(function() {

    var button = $("#button");
    var data = new Date();

    var arrNameMonth = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь",
                        "октябрь", "ноябрь", "декабрь"];

    var gettingData = {
        data() {
            let number_data = data.getDate();

            return number_data;
        },
        month() {
            let number_month = data.getMonth();

            return translateMonth( arrNameMonth, number_month );
        },
        year() {
            let number_year = data.getFullYear();

            return number_year;
        }
    }

    function translateMonth(arr, num) {

        for(var i = 0; i < arrNameMonth.length; i++ ) {

           if(num == i) return arrNameMonth[i];
        }

    }

    function createBlock() {
        var textClient = $("#textarea").val();

        if(!$("#textarea").val()) {
            return;
        }

        let createElem = $("<div/>", {
            class: "pt-3",
            prepend: $("<span/>", {
                class: "text-dark font-weight-bold",
                text: "Самуил",
                append: $("<span/>", {
                    class: "pl-2 data-text-info",
                    text: gettingData.data() + " " + gettingData.month() + " " + gettingData.year()
                })

            }),
            append: $("<div/>", {
                class: "comment-window pl-3 p-2 mt-3",
                append: $("<p/>", {
                    text: textClient,
                    class: "m-0",

                })
            })
        });

        return createElem;
    }

    function commentBlock() {
        $(".page-comments__block-comments").append(createBlock());
        $("#textarea").val("");
    }


    function addNewBlockComments(but) {
        $(but).on("click", function() {
            commentBlock();
        });
    }

    addNewBlockComments( button );

    function addNewBLockOnKeys() {

        $( document ).on("keydown", function(event){
            if( event.ctrlKey && event.code == 'Enter' ) {
                commentBlock();
            }
        });

    }
    addNewBLockOnKeys();


});