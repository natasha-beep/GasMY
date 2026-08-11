
const views = document.querySelectorAll('.view');
const navButtons = document.querySelectorAll('.nav-tabs button[data-view]');

function showView(id){
  views.forEach(v => v.classList.toggle('active', v.id === id));
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.view === id));
  window.scrollTo({top:0, behavior:'smooth'});
  if(history.replaceState) history.replaceState(null,'','#'+id);
}

navButtons.forEach(b => b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-view-link]').forEach(b => b.addEventListener('click',()=>showView(b.dataset.viewLink)));

function openUtility(key){
  document.querySelectorAll('.source-nav button').forEach(b=>b.classList.toggle('active', b.dataset.utility===key));
  document.querySelectorAll('.source-pane').forEach(p=>p.classList.toggle('active', p.dataset.pane===key));
}

document.querySelectorAll('[data-go]').forEach(el=>{
  el.addEventListener('click',()=>{
    showView(el.dataset.go);
    if(el.dataset.openUtility){
      setTimeout(()=>openUtility(el.dataset.openUtility),120);
    }
  });
});

document.querySelectorAll('.source-nav button').forEach(b=>{
  b.addEventListener('click',()=>openUtility(b.dataset.utility));
});

document.querySelectorAll('.source-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const cat = item.dataset.category;
    const pane = document.querySelector(`.source-pane[data-pane="${cat}"]`);
    if(!pane) return;

    pane.querySelectorAll('.source-item').forEach(x=>x.classList.remove('selected'));
    item.classList.add('selected');

    const img = document.getElementById(`preview-image-${cat}`);
    const title = document.getElementById(`preview-title-${cat}`);
    const open = document.getElementById(`preview-open-${cat}`);
    const link = document.getElementById(`preview-link-${cat}`);

    if(img){
      img.style.opacity = '.25';
      img.src = item.dataset.thumb;
      img.onload = ()=>img.style.opacity='1';
      img.onerror = ()=>{
        img.style.opacity='1';
        img.alt = 'Preview unavailable — open source document';
      };
    }
    if(title) title.textContent = item.dataset.title;
    if(open) open.href = item.dataset.open;
    if(link) link.href = item.dataset.open;
  });
});

const initial = location.hash.replace('#','');
if(initial && document.getElementById(initial)) showView(initial);
