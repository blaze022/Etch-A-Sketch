let colorType="red";
let pixelColor;
let x=0;
document.getElementById('clearclick').addEventListener('click',clearBlock);
document.getElementById('makeclick').addEventListener('click',makeBlock);
document.getElementById('setsize').addEventListener('click',setBlockSize);
document.getElementById('colorChange').addEventListener('click',change);

function setBlockSize(){
    x=prompt("Enter the number of square sides you want in your grid.")
    x=Number(x)  
}

function change(){
    let x=Math.floor((Math.random() * 6) + 1);
    switch(x){
        case 1:
           colorType="pink";
            break

        case 2:
           colorType="orange";
            break
        case 3:
           colorType="brown";
            break

        case 4:
           colorType="purple";
            break
        case 5:
           colorType="green";
            break
        case 6:
            colorType="blue";
    }
}


function makeBlock(e){
    if(x==0){
        return
    }
    let size=600/x;
    for(var i=0;i<x;i++){
        var row=document.createElement('div');
        row.className="row";
        row.style.height=size+'px';
        for(var j=0;j<x;j++){
            var box=document.createElement('div');
            box.className="box";
            box.style.width=size+'px';
            row.appendChild(box);
        }
        document.getElementById('parentBox').appendChild(row);
    }
  
    document.getElementById('makeclick').removeEventListener('click',makeBlock);
    var shc=document.querySelectorAll(".box");
    shc.forEach((button)=>{
        button.addEventListener('mouseover',cchange)
    });
    console.log(shc);
}


function cchange(e){
    e.target.style.background=colorType;
}



function clearBlock(e){
    const myele=document.getElementById('parentBox');
    myele.innerHTML="";
    const temp=document.getElementById('makeclick');
    if(temp.getAttribute('listener')==null){
        temp.addEventListener('click',makeBlock);
    }
}
