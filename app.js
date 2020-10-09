var activeplayer;
var score;
reasign();
document.querySelector('.btn-roll').addEventListener('click',function()
{
   var dice=Math.floor(Math.random()*6)+1;
   var x=document.querySelector('#dice-1');
   x.style.dislplay='block';
   x.src='dice-'+dice+'.png';
   if(dice!=1)
   {
      score[activeplayer]+=dice;
     // document.getElementById('current-'+activeplayer).textContent=score[activeplayer];
      document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
      document.getElementById('current-'+activeplayer).textContent=score[activeplayer];
   }
   else
   {
      activeplayer==0?activeplayer=1:activeplayer=0;
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
   }

});
document.querySelector('.btn-hold').addEventListener('click', function()
{
   if(score[activeplayer]>=40)
   {
      document.querySelector('#name-' +activeplayer).textContent='Winner';
   }
   else
   {
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      //activeplayer==0?activeplayer=1:activeplayer=0;
      //document.querySelector('.player-'+activeplayer+'-panel').classList.toggle('active');
   }
});
document.querySelector('.btn-new').addEventListener('click',reasign); 
 function reasign()
{
  activeplayer=0;
  score=[0,0];
  document.getElementById('name-0').textContent='Player 1';
   document.getElementById('score-0').textContent=0;
   document.getElementById('score-1').textContent=0;
   document.getElementById('current-0').textContent=0;
   document.getElementById('current-1').textContent=0;
   document.getElementById('name-1').textContent='Player 2';
   document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
}