function capToFront(str){
    let upcap = '';
    const lowcap = str.replace(/[A-Z]/g, function(Math){
        upcap += Math;
        return '';
    });
return upcap + lowcap;
}
console.log("capToFront(hApPy):"+capToFront("hApPy"));
console.log("capToFront(moveMENT):"+capToFront("moveMENT"));
console.log("capToFront(shOrtCAKE):"+capToFront("shOrtCAKE"));