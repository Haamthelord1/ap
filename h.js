
var loc = localStorage.getItem('bud');
if (loc == undefined ) {
var tota = 0;
localStorage.setItem('bud', 10);
var loc = localStorage.getItem('bud')
var to = "Your Install Bonus Is : "+ loc +" $";
document.write("<strong>"+to+"</strong>")
} else { //DecimalGenerate(); //window.print(l);
var total = 0;
var tota = "h";
var l = Math.random()*0.10;
var m = l.toFixed(2)
var lo = localStorage.getItem('bud');
////window.print(l);
var lod = +lo + +m;
////window.print(lod);

localStorage.setItem('bud',lod)
var load = lod.toFixed(2);
var tot = "<strong>"+load+"</strong>";
//var that = "<br><br>Your Balance";
total = tot;
//tota = that;
document.getElementById('total').innerHTML = total; }
/*function DecimalGenerate() { var min = 1.03, max = 5.99, NumberResult = Math.random() * (max - min) + min; //window.print(parseFloat(NumberResult).toFixed( 2 )); }; DecimalGenerate();*/ 
</script></h1><div id="by"><h2>$</h2></div>  
<p><div id="tota"><script>
  if (loc == undefined) {
    var tota = 0;
    localStorage.setItem('bud', 10);
    var loc = localStorage.getItem('bud')
    var to = "Your Install Bonus Is : " + loc + " $";
    document.write("<strong>" + to + "</strong>")
  } else {
    var that = "Your Balance";
    tota = that;
    document.getElementById('tota').innerHTML = tota;}
