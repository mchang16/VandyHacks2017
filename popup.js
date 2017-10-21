'use strict'

$(document).ready(function() {
  $("#refresh").click(page_reload);
});

function page_reload() {
  location.reload()
}
