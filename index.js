const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements= document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el)) 




const observerX = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('showX')
        }else{
            entry.target.classList.remove('showX')
        }
    })
})

const hiddenXElements= document.querySelectorAll('.hiddenX')
hiddenXElements.forEach((el)=>observerX.observe(el)) 