
const views = document.querySelectorAll('.view');
const navButtons = document.querySelectorAll('.primary-nav button[data-view]');

function showView(id){
  views.forEach(v => v.classList.toggle('active', v.id === id));
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.view === id));
  window.scrollTo({top:0, behavior:'smooth'});
  if (history.replaceState) history.replaceState(null,'','#'+id);
}
navButtons.forEach(b => b.addEventListener('click', () => showView(b.dataset.view)));
document.querySelectorAll('[data-go]').forEach(el => {
  el.addEventListener('click', () => {
    showView(el.dataset.go);
    if(el.dataset.openUtility){
      setTimeout(() => openUtility(el.dataset.openUtility), 150);
    }
  });
});
document.querySelectorAll('[data-view-link]').forEach(el=>{
  el.addEventListener('click',()=>showView(el.dataset.viewLink));
});

function openUtility(key){
  document.querySelectorAll('.utility-menu button').forEach(b => b.classList.toggle('active', b.dataset.utility === key));
  document.querySelectorAll('.utility-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === key));
}
document.querySelectorAll('.utility-menu button').forEach(b=>{
  b.addEventListener('click',()=>openUtility(b.dataset.utility));
});

document.querySelectorAll('.utility-pane').forEach(pane=>{
  const key = pane.dataset.pane;
  pane.querySelectorAll('.doc-row').forEach(row=>{
    row.addEventListener('click',()=>{
      pane.querySelectorAll('.doc-row').forEach(r=>r.classList.remove('is-selected'));
      row.classList.add('is-selected');
      const frame = document.getElementById('preview-frame-'+key);
      const title = document.getElementById('preview-title-'+key);
      const open = document.getElementById('preview-open-'+key);
      if(frame) frame.src = row.dataset.preview;
      if(title) title.textContent = row.dataset.title;
      if(open) open.href = row.dataset.open;
    });
  });
});

const initial = location.hash.replace('#','');
if(initial && document.getElementById(initial)) showView(initial);
