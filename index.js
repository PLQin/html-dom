
$(document).ready(function () {

    let bodyhtml = $('#root').html();
    for (const text in cnjson) {
        if (cnjson.hasOwnProperty(text)) {
            const element = cnjson[text];
            bodyhtml = bodyhtml.replace(new RegExp(text, 'g'), element)
        }
    }
    $('#root').html(bodyhtml);

});