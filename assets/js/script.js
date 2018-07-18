  var c = document.getElementById('homeCanvas');
  var ctx = c.getContext('2d');
  //Le toit
  ctx.beginPath();
  ctx.moveTo(200,30);
  ctx.lineTo(150,70);
  ctx.lineTo(250,70);
  ctx.closePath();
  ctx.fillStyle = '#D7823E';
  ctx.fill();
// La maison
  ctx.beginPath();
  ctx.moveTo(150,70);
  ctx.lineTo(150,170);
  ctx.lineTo(250,170);
  ctx.lineTo(250,70);
  ctx.lineTo(150,70);
  ctx.closePath();
  ctx.fillStyle = '#A1D8E6';
  ctx.fill();
//
  ctx.beginPath();
  ctx.moveTo(160,80);
  ctx.lineTo(180,80);
  ctx.lineTo(180,100);
  ctx.lineTo(160,100);
  ctx.closePath();
  ctx.fillStyle = '#C9C9C9';
  ctx.fill();
//
  ctx.beginPath();
  ctx.moveTo(240,80);
  ctx.lineTo(220,80);
  ctx.lineTo(220,100);
  ctx.lineTo(240,100);
  ctx.closePath();
  ctx.fillStyle = '#C9C9C9';
  ctx.fill();
//
  ctx.beginPath();
  ctx.moveTo(180,170);
  ctx.lineTo(220,170);
  ctx.lineTo(220,130);
  ctx.lineTo(180,130);
  ctx.closePath();
  ctx.fillStyle = '#C9C9C9';
  ctx.fill();
