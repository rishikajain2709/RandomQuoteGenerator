const api='http://api.quotable.io/random'
const p=document.querySelector('#author')
const getbutton=document.querySelector('#new-quote')
const copybutton=document.querySelector('#copy-quote')
getbutton.addEventListener('click',()=>{
    fetch(api)
    .then(function(response){
        if(!response.ok)
            console.log("invalid");
        return response.json()
            
    })
    .then(function(ans){
        console.log(ans);
    
        console.log(ans.content);
        p.innerHTML=`${ans.content}`
    })
    .catch(function(err){
        console.log(err);
        
    })
})

copybutton.addEventListener('click',()=>{

    const text = p.textContent
    if(text.length>0){
    navigator.clipboard.writeText(text)
    .then(function(){
        console.log(text);

       alert("text has been copied")
       
    }).catch(function(err){
        console.log(err);
        
    })
    }
    else
alert('text is empty')
})


