function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function toggleText(id) {
    var el = document.getElementById(id);
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }
}

function toggleDiagram(id) {
    var el = document.getElementById(id);
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }
}
function openModal(modalId, imgSrc) {
    const modal = document.getElementById(modalId);
    const modalImg = document.getElementById('modal-content-img');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="XYEEE874Eg4Y5EYTH0Mlp";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
