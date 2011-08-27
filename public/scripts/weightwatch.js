$(function () {
    var d = [
       [new Date(2011, 1, 1, 0, 0, 0, 0).getTime(), 94.2],
       [new Date(2011, 2, 25, 0, 0, 0, 0).getTime(), 95.4],
       [new Date(2011, 6, 20, 0, 0, 0, 0).getTime(), 104.2],
       [new Date(2011, 8, 27, 0, 0, 0, 0).getTime(), 100.5]
    ];
    
    $.plot($("#placeholder"), [d], { xaxis: { mode: "time" } });
});
