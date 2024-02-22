$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        const novaTarefa = $(".inputEntrada").val();
        $("<li>").text(novaTarefa).appendTo("ul");
        $(".inputEntrada").val("");
    });
    $("ul").on("click", "li", function () {
        $(this).toggleClass("riscar-linha");
    });
    $(document).on("dblclick", "li", function () {
        $(this).remove();
    });
});
