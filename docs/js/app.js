//var lastScrollTop = 0;
//var offsetSeccion1 = 1; Calculo para todos los objetos de la Seccion 1 en html
//var offsetSeccion2 = 100; Calculo para todos los objetos de la Seccion 1 en html

/*Seccion para el movimiento de los objetos */
/*
window.addEventListener("scroll", function(){
  var vel1 = "1s";
  var vel2 = "2s";
  var vel3 = "3s";
  var seccion1 = document.getElementById("obj1");
  var cuadrado1 = document.getElementById("cuadrado1");
  var cuadrado2 = document.getElementById("cuadrado2");
  var tittleSeccion1 = document.getElementById("titleSeccion1");
  var parrafoSeccion1 = document.getElementById("parrafoSeccion1");
  var contASeccion1 = document.getElementById("contASeccion1");
  var seccion2 = document.getElementById("obj2");
  var target = window.pageYOffset || document.documentElement.scrollTop;

  
  seccion1.style.transition = vel2;
  cuadrado1.style.transition = vel3;
  cuadrado2.style.transition = vel1;

  
  contASeccion1.style.transition = vel3;

  //Validaciones Cuando la pagina esta en el top = 0 
  if(target ==0){
    offsetSeccion1=0;
    offsetSeccion2=100;
    cuadrado1.style.transform = "translateX(0px)";
    cuadrado2.style.transform = "translateX(0px)";
    
    tittleSeccion1.style.transform = "translateY(0px)";
    parrafoSeccion1.style.transform = "translateY(0px)";
    contASeccion1.style.transform = "translateX(0px)";

    seccion1.style.transform = "translateX(0px)";
    seccion2.style.transform = "translateX(100%)";
    
  }

  //Validaciones para la seccion 1
  if (target > lastScrollTop){//cuando es para abajo el scroll
    console.log(offsetSeccion1);
    if(offsetSeccion1 >= 0 && offsetSeccion1 <=1700){//&& offsetSeccion1<100 <=para cuando la pagina es mas pequeña
      console.log(offsetSeccion1);
      tittleSeccion1.style.transition = vel1;
      parrafoSeccion1.style.transition = vel2;
      offsetSeccion1 +=100;
      seccion1.style.transform = "translateX("+offsetSeccion1+"px)";
      cuadrado1.style.transform = "translateX("+offsetSeccion1+"px)";
      cuadrado2.style.transform = "translateX("+offsetSeccion1+"px)";

      tittleSeccion1.style.transform = "translateY(-"+offsetSeccion1+"px)";
      parrafoSeccion1.style.transform = "translateY(-"+offsetSeccion1+"px)";
      contASeccion1.style.transform = "translateX("+offsetSeccion1+"px)";
      
    }
    
  } else {cuando es para arriba el scroll
    if(offsetSeccion1 >= 99 ){//&& offsetSeccion1< 150 <=para cuando la pagina es mas pequeña
      offsetSeccion1 -=100;
      tittleSeccion1.style.transition = "1.1";
      parrafoSeccion1.style.transition = "0.9s";
      seccion1.style.transform = "translateX("+offsetSeccion1+"px)";
      cuadrado1.style.transform = "translateX("+offsetSeccion1+"px)";
      cuadrado2.style.transform = "translateX("+offsetSeccion1+"px)";

      tittleSeccion1.style.transform = "translateY(-"+offsetSeccion1+"px)";
      parrafoSeccion1.style.transform = "translateY(-"+offsetSeccion1+"px)";
      contASeccion1.style.transform = "translateX("+offsetSeccion1+"px)";
      console.log(offsetSeccion1);
    }
  }// Fin 1° IF de movimiento Vertical

  //Validaciones para la precision de los objetos seccion 1 y 2
  if(offsetSeccion1<98){
    offsetSeccion1=0;
    offsetSeccion2=100;
    console.log("*****Entro*****"+offsetSeccion1);
    cuadrado1.style.transform = "translateX(0px)";
    cuadrado2.style.transform = "translateX(0px)";

    tittleSeccion1.style.transform = "translateX(0px)";
    parrafoSeccion1.style.transform = "translateX(0px)";
    contASeccion1.style.transform = "translateX(0px)";

    seccion1.style.transform = "translateX(0px)";
    seccion2.style.transform = "translateX(100%)";
    
  }
  
  if(target >= 850 && target <= 940){
    offsetSeccion2=0;
    seccion2.style.transform = "translateX(0%)";
    //console.log("//////////////Entro")
  }

  //console.log("target: "+target);
  //console.log("2seccion: "+offsetSeccion2+"  target: "+target);
  //Validaciones para la Seccion 2
  if (target > lastScrollTop){//cuando es para abajo el scroll
    
    if(target<850 && offsetSeccion2>=0){
      offsetSeccion2-=5;
      seccion2.style.transform = "translateX("+offsetSeccion2+"%)";
      
    }

    if(target>850 ){
      offsetSeccion2+=5;
      seccion2.style.transform = "translateX("+offsetSeccion2+"%)";
    }
    
  } else {//cuando es para arriba el scroll
    if(target>900 ){
      offsetSeccion2-=5;
      seccion2.style.transform = "translateX("+offsetSeccion2+"%)";
    }
    if(target<900 ){
      offsetSeccion2+=5;
      seccion2.style.transform = "translateX("+offsetSeccion2+"%)";
    }
  }

  if(offsetSeccion2<3){
    offsetSeccion2=0;
    //console.log("*****Entro*****"+offsetSeccion1);
    seccion2.style.transform = "translateX(0%)";
    
  }
  




  lastScrollTop = target;
}, false);

/*window.addEventListener('scroll', ()=>{
    let scrollAdd;

    let scroll = window.scrollY;
    
    let tr = document.getElementById("obj1");
    //let top = obj1[0].getBoundingClientRect().top;


    if(scrollAdd>scroll){
      console.log("es mayor");
    }else{
      console.log("es menor");
    }
    
    
    console.log("scroll: "+scroll);
    
    
  })*/

window.onload = function(){
  parrafoSeccion4(); 
  cambioMarcas();
}

function cambioMarcas(){
  //var init=0;
  var imgMar = document.getElementsByClassName("marcaImg");
  var imgMarRes = document.getElementsByClassName("marcaImgRes");

  setInterval(function(){
    //Para las marcas desktopVersion
    for (let index = 0; index < imgMar.length; index++) {
      var rnd = Math.floor((Math.random() * (6-1))+1);
      imgMar[index].setAttribute("src", "img/marca"+rnd+".svg");
      imgMar[index].style.animationName = "zoomIn";
      imgMar[index].style.animationDuration = "1s";
    }

        //para las marcas phoneVersion
    for (let index = 0; index < imgMarRes.length; index++) {
      var rnd = Math.floor((Math.random() * (6-1))+1);
      imgMarRes[index].setAttribute("src", "img/marca"+rnd+".svg");
      imgMarRes[index].style.animationName = "zoomIn";
      imgMarRes[index].style.animationDuration = "1s";
    }
    
    var id = setInterval(function(){
      for (let index = 0; index < imgMar.length; index++) {
        imgMar[index].style.animationName = "";
      }
      
      for (let index = 0; index < imgMarRes.length; index++) {
        imgMarRes[index].style.animationName = "";
      }

      clearInterval(id);
    },1000)
    
    /*
    //Funcionalidad imagen por imagen
    var rnd = Math.floor((Math.random() * (6-1))+1);
    imgMar[init].setAttribute("src", "img/marca"+rnd+".svg");
    imgMar[init].style.animationName = "zoomIn";
    imgMar[init].style.animationDuration = "1s";
    
    if(init == 0){
      imgMar[1].style.animationName = "";
    }else if(init==1){
      imgMar[2].style.animationName = "";
    }else if(init==2){
      imgMar[3].style.animationName = "";
    }else if(init==3){
      imgMar[4].style.animationName = "";
    }else if(init==4){
      imgMar[0].style.animationName = "";
    }else{
      init=0
    }
    init++

    if(init==5){
      init=0;
    }
    */
  }, 3000);

}

function parrafoSeccion4(){
  var off1 = 0;
  var off2 = -2100;
  var oN2 = false;
  var firtSpan = document.getElementById("firtSpan");
  var secondSpan = document.getElementById("secondSpan");
  /*Ciclo Infinito para la class parrafo4*/
  setInterval(function(){

    /*Aqui Empieza el ciclo con el primer Span*/
    if(off1>-4100 && off1 < 2001 ){
      off1 -=1;
      /*console.log("1)" + off1);*/
      firtSpan.style.transform = "translateX("+off1+"px)";
    }
    /*En el Momento cuando llegue el primer span, el segundo se posiciona*/
    if(off1<=-2200 && off1>=-2201){
      oN2 = true
      off2 = -2100;
      secondSpan.style.transform = "translateX("+off2+"px)";
    }
    /*El ciclo para el segundo span*/
    if(oN2){
      off2-=1;
      /*console.log("2)" + off2);*/
      secondSpan.style.transform = "translateX("+off2+"px)";
    }
    /*En el Momento cuando llegue el segundo span, el primer se posiciona*/
    if(off2 <=-6200 && off2 >=-6201){
      off1 = 2000;
      firtSpan.style.transform = "translateX("+off1+"px)";
    }
    /**se deja de accionar el segundo span */
    if(off2<= -8200){
      oN2=false;
    }
  }, 5);
}


var menuEsconder = document.getElementById("menuDesplegable");
var exitUp = document.getElementById("exit");
var exitDown = document.getElementById("exit");

var targetMenu = document.getElementsByClassName("TargetMenu");
//var targetMenuRes = document.getElementsByClassName("TargetMenuRes");

var menuDesplegable = document.getElementById("menuDesplegable");
var emojiRight = document.getElementsByClassName("Face_emoji");


var infoSlideOf = document.getElementsByClassName("info");
var infoSlideOn = document.getElementsByClassName("info");
var emojiLeft = document.getElementsByClassName("Face_emoji");
var estaDesplegado = true;

function desplegar(){
  if(estaDesplegado){
    
    
    
    menuDesplegable.style.transform = "translateX(0%)";
    
    exitDown.style.top = "40px";
    exitDown.style.animationName = "ExitDown";
    exitDown.style.animationDuration = "1.2s";
    
    emojiRight[0].style.left = "9%";
    emojiRight[0].style.animationName = "Emojiright";
    emojiRight[0].style.animationDuration = "1s";

    //Para la Version Desktop
    targetMenu[0].style.transition = "1.1s";
    targetMenu[0].style.left = "0px";
    
    targetMenu[1].style.transition = "1.2s";
    targetMenu[1].style.left = "0px";
    
    targetMenu[2].style.transition = "1.3s";
    targetMenu[2].style.left = "0px";

    targetMenu[3].style.transition = "1.4s";
    targetMenu[3].style.left = "0px";

    targetMenu[4].style.transition = "1.5s";
    targetMenu[4].style.left = "0px";

    //Para la Version Phone
    /*
    targetMenuRes[0].style.transition = "1.1s";
    targetMenuRes[0].style.left = "0px";
    
    targetMenuRes[1].style.transition = "1.2s";
    targetMenuRes[1].style.left = "0px";
    
    targetMenuRes[2].style.transition = "1.3s";
    targetMenuRes[2].style.left = "0px";

    targetMenuRes[3].style.transition = "1.4s";
    targetMenuRes[3].style.left = "0px";

    targetMenuRes[4].style.transition = "1.5s";
    targetMenuRes[4].style.left = "0px";*/

    infoSlideOn[0].style.transition = "1s";
    infoSlideOn[0].style.marginTop = "800px";
    estaDesplegado = false;
  }else{
    esconder();
    console.log("no esta desplegado" +estaDesplegado);
    
  }
  
}

function esconder(){
  menuEsconder.style.transform = "translateX(-100%)";

  exitUp.style.top = "-40px";
  exitUp.style.animationName = "ExitUp";
  exitUp.style.animationDuration = "1.2s";

  emojiLeft[0].style.left = "-170px";
  emojiLeft[0].style.animationName = "Emojileft";
  emojiLeft[0].style.animationDuration = "1s";

  //Para la version Desktop
  targetMenu[0].style.transition = ".9s";
  targetMenu[0].style.left = "-1000px";

  targetMenu[1].style.transition = ".8s";
  targetMenu[1].style.left = "-1000px";

  targetMenu[2].style.transition = ".7s";
  targetMenu[2].style.left = "-1000px";

  targetMenu[3].style.transition = ".6s";
  targetMenu[3].style.left = "-1000px";

  targetMenu[4].style.transition = ".5s";
  targetMenu[4].style.left = "-1000px";

  //Para la version Phone
  /*
  targetMenuRes[0].style.transition = ".9s";
  targetMenuRes[0].style.left = "-1000px";

  targetMenuRes[1].style.transition = ".8s";
  targetMenuRes[1].style.left = "-1000px";

  targetMenuRes[2].style.transition = ".7s";
  targetMenuRes[2].style.left = "-1000px";

  targetMenuRes[3].style.transition = ".6s";
  targetMenuRes[3].style.left = "-1000px";

  targetMenuRes[4].style.transition = ".5s";
  targetMenuRes[4].style.left = "-1000px";*/
  
  infoSlideOf[0].style.transition = ".5s";
  infoSlideOf[0].style.marginTop = "1000px";
  estaDesplegado = true;
}
