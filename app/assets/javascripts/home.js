/*
 * = require jquery
 * = require jquery_ujs
 * = require bootstrap.min
 * = require_self
 */

$(document).ready(function () {
    $('#search-contact').keyup(function (event) {
        var form = $(event.currentTarget).parent();
        form.submit();
    });
});

$('body').on('click', '.closebutton', function (event) {
    $(event.currentTarget).parents('#numbers1').addClass('hide');
    $(event.currentTarget).parents('#mobile').find('#numbers').removeClass('hide');
});

$('body').on('click', '.number', function (event) {
    var number = $(event.currentTarget).find('span:nth-child(1)').text();
    var number1 = number.replace(/\s/g, '');
    $(event.currentTarget).parents('#mobile').find('#search-contact').val(function (index, val) {
        return val + number1;
    });
    var form = $(event.currentTarget).parents('#mobile').find('#search-contact').parent();
    form.submit();
});

$('body').on('click', '.keypad', function(){
    var val = $(this).parents('#numbers').find('.keypad-show').first().css("visibility")
    if (val == "hidden") {
        $(this).parents('#numbers').find('.keypad-show').css("visibility", 'visible')
    } else {
        $(this).parents('#numbers').find('.keypad-show').css("visibility", 'hidden')
    }
});

$('body').on('click', '.closebutton1', function (event) {
    $(event.currentTarget).parents('#numbers2').addClass('hide');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.noraml_text').removeClass('hide');
});

$('body').on('click', '.hai', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search').find('#search-contact:input').val('');
});

$('body').on('click', '.closebutton', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.actual_data').text('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
});

$('body').on('click', '.closebutton1', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search-result').removeClass('hide');
});

$('body').on('click', '.plus-sign', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search').find('#search-contact:input').val('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.actual_data').text('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
});

$("#search-contact:input").on("change", function() {
    var value = $(this).val().toLowerCase();
    if ($(this).text().toLowerCase().indexOf(value) > -1) {
        $(this).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
    } else if (value == "") {
        $(this).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
    }
});

$('body').on('click', '.keypad-button', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search').find('#search-contact:input').val('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.actual_data').text('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
});