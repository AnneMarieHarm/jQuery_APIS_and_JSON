
"use strict";

additional:

$(document).ready(() => {
$("p").on("mouseover", (event) => {
    $(event.target).fadeTo(500, 0.5);
});