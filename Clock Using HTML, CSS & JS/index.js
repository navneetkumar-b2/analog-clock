setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
console.log(`time is ${htime} : ${mtime} : ${stime}`);
r=document.body.querySelector("#prnt-tme");
 r.innerHTML =  `<div> ${htime} : ${mtime} : ${stime}</div>` 
},900);
// let time=()=>{
    
//        let d = new Date();
//        let htime = d.getHours();
//        let mtime = d.getMinutes();
//        let stime = d.getSeconds();
//         console.log( "time is ${htime} : ${mtime} : ${stime}");
//         // let r = document.body.getElementById("prnt-tme");
//         prnt-tme.innerHTML="<div> time is ${htime} : ${mtime} : ${stime}</div>"
// }
// setInterval(time , 1000);
