var prices_raw = [101548, 101548, 81968, 81968];
var hour = '16:55';

var benefit_percentage = 12;
var cash_fees_percentage = 5;

var prices = prices_raw.map(myFunction);

function myFunction(num) {
    return num * (100 + benefit_percentage) / 100;
}

// var prices = [136868, 101548, 81968, 81968];

function format_price(number) {
    return number.toLocaleString("en-US", {
        style: "currency",
        currency: "DZD",
        maximumFractionDigits: 0
    });
}

// ======================

$(document).ready(function () {

    // document.write()
    for (i = 0; i < 4; i++) {
        $(`#price${i+1}`).html(`<b>${format_price(prices[i])}</b>`);
        $(`#hour${i+1}`).text(hour);

    }
    $("#cash_fees_percentage").text(cash_fees_percentage);

    // ADDING ON CHANGE EVENT HANDLER
    for (i = 0; i < 4; i++) {
        $(`#date${i+1}`).change(myfu);
    }
    $('#bank, #cash').change(myfu);

    // ADDING ON CLICK EVENT HANDLER
    $('#btn').click(myfu);

    $('#btn_reset').click(function () {
        $('#output').text("0.00");
    });
});

function myfu() {
    // var fdate = document.getElementById("fdate");
    var output = document.getElementById("output");

    total_price = 0;

    if ($("#date1").is(":checked")) {
        total_price = prices[0];
    } else if ($("#date2").is(":checked")) {
        total_price = prices[1];
    } else if ($("#date3").is(":checked")) {
        total_price = prices[2];
    } else if ($("#date4").is(":checked")) {
        total_price = prices[3];
    }

    if ($("#cash").is(":checked")) {
        plus = total_price * cash_fees_percentage / 100;
        total_price += plus;
    }

    $("#output").text(`${ format_price(total_price) }`);

    // output.innerHTML = fdate.value;
    // output.innerHTML = 'hello';

    return true;
}
