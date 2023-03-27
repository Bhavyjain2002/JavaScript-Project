const getcolor=()=>{
    const randomcolor=Math.floor(Math.random()*16777215);
    const randomcode ="#" + randomcolor.toString(16);
    //document.body.style.backgroundColor= randomcode;
    const body=document.getElementsByTagName('body');
    document.body.style.backgroundColor=randomcode;
    const ch =document.getElementById('color-code');
    ch.innerHTML=randomcode;
    
}

const btn = document.getElementById('btn');
btn.addEventListener('click', getcolor);

getcolor();