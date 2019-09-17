var c = document.getElementById("basketball1");
var ctx = c.getContext("2d");
ctx.lineWidth = 5;
ctx.strokeStyle= "#021f4f";
ctx.beginPath();
ctx.moveTo(52, 27);
ctx.bezierCurveTo(55, 80, 155, 80, 158, 27);
ctx.stroke();
ctx.moveTo(52, 139);
ctx.bezierCurveTo(55,100, 155, 100, 158, 139);
ctx.stroke();
ctx.moveTo(30,87);
ctx.lineTo(185,87);
ctx.stroke();
ctx.moveTo(106, 5);
ctx.lineTo(106, 200);
ctx.stroke();

var c = document.getElementById("gradient");
var ctx = c.getContext("2d");

