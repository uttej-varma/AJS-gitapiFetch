const body=document.getElementsByTagName("body");
let count=1;
let arr=[];
window.addEventListener("load",()=>{
    fetch("https://api.github.com/repositories/1296269/issues?page=1&per_page=5").then((res)=>{return res.json()}).
    then((data)=>{arr=[...data];
        mapping(arr)}).catch((err)=>{console.log(err)});
})
document.getElementById("load_next").addEventListener("click",()=>{
    count=count+1;
    document.getElementById("pageNumber").innerHTML=`Page Number:${count}`;
    fetching();
})
document.getElementById("load_prev").addEventListener("click",()=>{
    if(count>1)
    {
        count=count-1;
        document.getElementById("pageNumber").innerHTML=`Page Number:${count}`;
        fetching();
    }
})
function fetching(){
    fetch(`https://api.github.com/repositories/1296269/issues?page=${count}&per_page=5`).then((res)=>{return res.json()}).
    then((data)=>{arr=[...data];
        mapping(arr)}).catch((err)=>{console.log(err)});
}
function mapping(arr){
    const list=document.getElementById("displayResult");
    list.innerHTML="";
    arr.map((value)=>{
        list.innerHTML+=`<li>${value.user.login}</li>`
    })
}