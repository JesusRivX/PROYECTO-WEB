let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
    if(checked==true){
        label_toggle.innerHTML='<i class="fa-solid fa-sun">';
        label_toggle.style.color="white";
        document.getElementById("cabecera").id = "cabecera_";
        document.getElementById("textos-header").classList.remove("textos-header");
        document.getElementById("textos-header").classList.add("textos-header_");
        document.getElementById("porta").classList.remove("portafolio");
        document.getElementById("porta").classList.add("portafolio_");
        document.getElementById("sedes").classList.remove("about-services");
        document.getElementById("sedes").classList.add("about-services_");
        div_toggle.innerHTML='<svg viewBox="0 0 500 150" preserveAspectRatio="none"style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"style="stroke: none; fill: #200202;"></path></svg>'
    }else{
        label_toggle.innerHTML='<i class="fa-solid fa-moon">';
        label_toggle.style.color="black";
        document.getElementById("cabecera_").id = "cabecera";
        document.getElementById("textos-header").classList.remove("textos-header_");
        document.getElementById("textos-header").classList.add("textos-header");
        document.getElementById("porta").classList.remove("portafolio_");
        document.getElementById("porta").classList.add("portafolio");
        document.getElementById("sedes").classList.remove("about-services_");
        document.getElementById("sedes").classList.add("about-services");
        div_toggle.innerHTML='<svg viewBox="0 0 500 150" preserveAspectRatio="none"style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"style="stroke: none; fill: #ffffff;"></path></svg>'
    }
})