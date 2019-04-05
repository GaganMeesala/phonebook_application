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

    $('.cancel_button').click(function (event) {
        var value = $(event.currentTarget).prev().val();
        if (value == undefined) {
        } else {
            var word = value.slice(0,-1);
            $(event.currentTarget).parents('#search-form').find('#search-contact').val(word);
            var form = $(event.currentTarget).parent('#search-form');
            form.submit();
        }
    });
});

$('body').on('click', '.closebutton', function (event) {
    $(event.currentTarget).parents('#numbers1').addClass('hide');
    $(event.currentTarget).parents('#mobile').find('#numbers').removeClass('hide');
    $(event.currentTarget).parents('#mobile').find('#search').find('#search-contact:input').val('');
});

$('body').on('click', '.number', function (event) {

    $(event.currentTarget).parents('#mobile').find('#search').css("visibility", "visible");

    var id = $(event.currentTarget).parents('#mobile').find('#contact_detail').find('#create-contact').attr('id');

    var number = $(event.currentTarget).find('span:nth-child(1)').text();
    var number1 = number.replace(/\s/g, '');

    if (id == 'create-contact') {
        $(event.currentTarget).parents('#mobile').find('#number').val(function (index, val) {
            return val + number1;
        });
        var form = $(event.currentTarget).parents('#mobile').find('#create-contact').parent();
    } else {
        var number = $(event.currentTarget).find('span:nth-child(1)').text();
        var number1 = number.replace(/\s/g, '');
        $(event.currentTarget).parents('#mobile').find('#search-contact').val(function (index, val) {
            return val + number1;
        });
        var form = $(event.currentTarget).parents('#mobile').find('#search-contact').parent();
    }
    form.submit();
});

$('body').on('click', '.hai', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search').css("visibility", "hidden");
});

$('body').on('click', '.closebutton', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.actual_data').text('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
});

$('body').on('click', '.closebutton1', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search').css("visibility", "visible");
    $(event.currentTarget).parents('#mobile').find('#search-result').removeClass('hide');
    $(event.currentTarget).parents('#mobile').find('#contact_detail').html('');
    $(event.currentTarget).parents('#numbers2').addClass('hide');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.noraml_text').removeClass('hide');
});

$('body').on('click', '.plus-sign', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search').find('#search-contact:input').val('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.actual_data').text('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
    $(event.currentTarget).parents('#mobile').find('#search').css("visibility", "hidden");
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

$('body').on('click', '.cancel_button', function (event) {
    $(event.currentTarget).parents('#mobile').find('#search').find('#search-contact:input').val('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.actual_data').text('');
    $(event.currentTarget).parents('#mobile').find('#search-result').find('.normal_text').removeClass('hide');
});
