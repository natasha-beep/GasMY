
const views = document.querySelectorAll('.view');
const navButtons = document.querySelectorAll('nav button[data-view]');

function showView(id){
  views.forEach(v => v.classList.toggle('active', v.id === id));
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.view === id));
  window.scrollTo({top:0, behavior:'smooth'});
  if(history.replaceState) history.replaceState(null,'','#'+id);
}
navButtons.forEach(b => b.addEventListener('click', () => showView(b.dataset.view)));

const initial = location.hash.replace('#','');
if(initial && document.getElementById(initial)) showView(initial);

document.querySelectorAll('[data-go]').forEach(el=>{
  el.addEventListener('click', e=>{
    e.preventDefault();
    showView(el.dataset.go);
  });
});
