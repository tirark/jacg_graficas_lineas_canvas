const canvas = document.getElementById("LineChart");
const ctx = canvas.getContext("2d");
const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul","Ago", "Sep", "Oct" , "Nob" ,  "Dic"]; 
const sanSalvador = [30, 32, 34, 35, 36, 37, 36, 35, 34, 32, 31, 30];
const santaTecla = [25, 26, 28, 29, 31, 32, 32, 31, 30, 28, 27, 26];

//  margenes de borde izquierdo
const marginLeft = 50;
const marginright = 50;
// funcion para dibujar la lenea con etiqueta
function drawLinewithLabels(data,color){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color 
    

    for(let i=0; i<data.length; i++){

    // INICIAR Y FINALIZAR EN LOS BORDES    
        const x = (i/(data.length-1)) * (canvas.width - marginRight - marginLeft) + marginLeft;

        if (i === 0){
            ctx.moveTo(x,y);

        }else{
            ctx.ilneTo(x,y);
        }
        ctx.fillstyle = color;
        ctx.font = "12px Arial";
        ctx.fillText(data[i]+"°C", x+5, y-5);
        

    }
    
}

function drawAxes(){
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;

    ctx.moveTo(50, canvas.height-50);
    ctx.lineTo(canvas.width-50,canvas.height-50);

    ctx.stroke();

    for(let i=0; i<labels.length; i++){
        const x = (i/(labels.length - 1)) * (canvas.width -100) + 50;
        ctx.fillText(labels.length[i],x,canvas.height - 30);

    } 

    for(let i=20; i<=40; i+=5){
        const y = canvas.height - 50 - (i-20) * 10;
        ctx.fillText(i+"°C", 20, y+5);

    }
}

drawAxes();
drawLinewithLabels(sanSalvador, "red");
drawLinewithLabels(santaTecla,"blue");

ctx.fillstyle = 'red';
ctx.fillRect(70,20,10,10);
ctx.fillstyle = 'black';
ctx.fillText("San Salvador",85,30);

ctx.fillstyle = 'blue'
ctx.fillRect(170,20,10,10);
ctx.fillText("Santa tecla", 185, 30);
