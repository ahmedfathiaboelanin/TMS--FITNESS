const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const onedetail=document.getElementById("one-details");
const twodetail=document.getElementById("two-details");
const threedetail=document.getElementById("three-details");
const pack=document.getElementById("pack");
const close1=document.getElementById("close1");
const close2=document.getElementById("close2");
const close3=document.getElementById("close3");

one.onclick=function show_details(){
        onedetail.setAttribute("style","display:flex;")
        pack.setAttribute("style","display:none;")
}
two.onclick=function show_details(){
        twodetail.setAttribute("style","display:flex;")
        pack.setAttribute("style","display:none;")
}
three.onclick=function show_details(){
        threedetail.setAttribute("style","display:flex;")
        pack.setAttribute("style","display:none;")
}
close1.onclick=function close(){    
    onedetail.setAttribute("style","display:none;");
    pack.setAttribute("style","display:flex;")
}
close2.onclick=function close(){    
    twodetail.setAttribute("style","display:none;");
    pack.setAttribute("style","display:flex;")
}
close3.onclick=function close(){    
    threedetail.setAttribute("style","display:none;");
    pack.setAttribute("style","display:flex;")
}