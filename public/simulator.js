class Experiment
{  
   //  All the datasets are declared.
   Reagent={
       MOLISCH : 1 ,
       FEHLING : 2 ,
       BENEDICT :3 ,
       TOLLEN :4,
       IODINE :5,
       COPPERSULPHATE : 6,
       NITRICACID :7
   };
  

    //Assigns a random value to sample.
    constructor()
    {
       this.sample = Math.floor(Math.random()*2); //0 for fats and 1 for carbohydrates
   }
   
   //Methods of Experiment

   Add(Reagent)
   {
       switch (this.sample)
       {
           case 0: switch(Reagent)
                   {   
                       case this.Reagent.MOLISCH        :  this.test="Molisch's Test";
                                                           this.indication= "VioletRing";
                                                           break;
                       case this.Reagent.FEHLING        :  this.test="Fehling's Test";
                                                           this.indication= "RedPrecipitate";
                                                           break;
                       case this.Reagent.BENEDICT       :  this.test="Benedict's Test";
                                                           this.indication= "RedPrecipitate";
                                                           break;
                       case this.Reagent.TOLLEN         :  this.test="Tollen's Test";
                                                           this.indication= "SilverMirror";
                                                           break;
                       case this.Reagent.IODINE         :  this.test="Iodine Test"
                                                           this.indication= "BlueColorSoln";
                                                           break;
                       case this.Reagent.COPPERSULPHATE :  this.test="Biuret Test";
                                                           this.indication="NoEffect";
                                                           break;
                       case this.Reagent.NITRICACID     :  this.test="Xanthoproteic Test";
                                                           this.indication="NoEffect";
                                                           break;

                   }     
                   break; 
           case 1:  switch(Reagent)
                   {
                       case this.Reagent.MOLISCH        :  this.test ="Molisch's Test";
                                                           this.indication= "NoEffect";
                                                           break;
                       case this.Reagent.FEHLING        :  this.test ="Fehling's Test";
                                                           this.indication ="NoEffect";
                                                           break;
                       case this.Reagent.BENEDICT       :  this.test ="Benedict's Test";
                                                           this.indication ="NoEffect";
                                                           break;
                       case this.Reagent.TOLLEN         :  this.test="Tollen's Test";
                                                           this.indication="NoEffect";
                                                           break;
                       case this.Reagent.IODINE         :  this.test ="Iodine Test";
                                                           this.indication="NoEffect";
                                                           break;
                       case this.Reagent.COPPERSULPHATE :  this.test="Biuret Test";
                                                           this.indication="VioletColour";
                                                           break;
                       case this.Reagent.NITRICACID     :  this.test="Xanthoproteic Test";
                                                           this.indication="YellowColour";
                                                           break;
                   }
                   break;
       }
   }
       
}

myExperiment = new Experiment();


var x = $(".Draggable").length; 
for(let i=0;i<x;++i)
{       
    document.querySelectorAll(".Draggable")[i].setAttribute("draggable" ,"true");
    document.querySelectorAll(".Draggable")[i].addEventListener("dragstart", function (ev){
        ev.dataTransfer.setData("text",ev.target.id);
    } );
}



for(let i=0;i<$(".Droppable").length;++i)
{
    document.querySelectorAll(".Droppable")[i].addEventListener("drop",function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var copyimg= document.createElement("img");
        var orignal= document.getElementById(data);
        copyimg.src=orignal.src;
        copyimg.alt=orignal.alt;
        copyimg.classList.add("Droppable2");
        ev.target.appendChild(copyimg);
        copyimg.addEventListener("drop",function (ev) {
            ev.preventDefault();
            var data=ev.dataTransfer.getData('text');
            myExperiment.Add(Number(data));
            alert("test is" + myExperiment.test+"  indication is"+myExperiment.indication);
       
        //document.createElement("img");
        console.log(this.parentNode);
        this.parentNode.removeChild(this);
            }  );
        copyimg.addEventListener("dragover" ,function(ev){
            ev.preventDefault();
                      
    });    
        copyimg.style.position="fixed";  
        copyimg.style.left=ev.clientX+"px";
        copyimg.style.top=ev.clientY+"px";
        
        }  );
        document.querySelectorAll(".Droppable")[i].addEventListener("dragover" ,function(ev){
            ev.preventDefault();
        });
    }
    
    for(let i=0;i<$(".Droppable2").length;++i)
    {   document.querySelectorAll(".Droppable2")[i].addEventListener("drop",function (ev) {
        ev.preventDefault();
        var data=ev.dataTransfer.getData('text');
        myExperiment.Add(Number(data));
        alert("test is" + myExperiment.test+"  indication is"+myExperiment.indication);
    ev.target.appendChild(data);
    //document.createElement("img");
    console.log(this.parentNode);
    this.parentNode.removeChild(this);
        }  );
        document.querySelectorAll(".Droppable2")[i].addEventListener("dragover" ,function(ev){
            ev.preventDefault();
                      
    });
        
}
