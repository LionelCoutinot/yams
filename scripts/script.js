let compt=0;
let compt2=0;
let image1 =  new Image(); 
let image2 =  new Image(); 
let image3 =  new Image();
let image4 =  new Image();

let image5 =  new Image();

let A=document.getElementById("gg");
let B=document.getElementById("gg1");
let C=document.getElementById("gg2");
let D=document.getElementById("gg3");
let E=document.getElementById("gg4");

let x2,y2,z2,v2,Z2;
let F=0, F1=0, F2=0, F3=0, F4=0;



function adressealeatoire()// Lancers des dès
{
    compt2++;
    document.getElementById("ancre").innerHTML= "Nombre de lancers : " + compt2;
    let adresse = new Array ("images/face1.gif", "images/face2.gif", "images/face3.gif", "images/face4.gif", "images/face5.gif", "images/face6.gif");
    image1.onload = function() { 
        document.getElementById("uneImage1").src = image1.src; 
    } 
    image2.onload = function() { 
        document.getElementById("uneImage2").src = image2.src; 
    } 
    image3.onload = function() { 
        document.getElementById("uneImage3").src = image3.src; 
    } 
    image4.onload = function() { 
        document.getElementById("uneImage4").src = image4.src; 
    } 
    image5.onload = function() { 
        document.getElementById("uneImage5").src = image5.src; 
    } 
	if ((compt2===1) || (compt2===2 && F===0) || (compt2===3 && F===0)) {
		x2 = Math.round(Math.random()*(5-0)+0);
        image1.src = (adresse[x2]);  
	}
	if ((compt2===1) || (compt2===2 && F1===0) || (compt2===3 && F1===0)) {
		y2 = Math.round(Math.random()*(5-0)+0);
        image2.src = (adresse[y2]); 
	}
	if ((compt2===1) || (compt2===2 && F2===0) || (compt2===3 && F2===0)) {
		z2 = Math.round(Math.random()*(5-0)+0);
        image3.src = (adresse[z2]);   
	}

	if ((compt2===1)|| (compt2===2 && F3===0) || (compt2===3 && F3===0)) {
		v2 = Math.round(Math.random()*(5-0)+0);
        image4.src = (adresse[v2]);   
	}

	if ((compt2===1) || (compt2===2 && F4===0) || (compt2===3 && F4===0)) {
		w2 = Math.round(Math.random()*(5-0)+0);
        image5.src = (adresse[w2]);   
	}
	else if (compt2>3){
		document.getElementById("ancre").innerHTML="Terminé !";
        alert("Terminé !")
	}
}

function garde1(){
    if (compt2>0 && compt2<4){
        if(A.disactived == false)   {
            A.disactived = true;
            A.style.backgroundColor="#22B14C";
            F=0
        }
        else  {
            A.disactived = false;
            A.style.backgroundColor="#00FFFF";
            F=1
        }
    }                    
}


function garde2(){
    if (compt2>0 && compt2<4){
        if(B.disactived == false)  {
            B.disactived=true;
            B.style.backgroundColor="#22B14C"; 
            F1=0
        }
		else {
            B.disactived=false;
            B.style.backgroundColor="#00FFFF";
             F1=1
           }
    }                    
}

function garde3(){
    if (compt2>0 && compt2<4){
        if(C.disactived == false)  {
            C.disactived=true;
            C.style.backgroundColor="#22B14C";
            F2=0
        }
        else   {
            C.disactived=false;
            C.style.backgroundColor="#00FFFF";
            F2=1
        }
    
    }                    
}

function garde4(){
    if (compt2>0 && compt2<4){
        if(D.disactived == false) {
            D.disactived=true;
            D.style.backgroundColor="#22B14C";
            F3=0
        }
        else {
            D.disactived=false;
            D.style.backgroundColor="#00FFFF";
            F3=1
       }    
    }                    
}
function garde5(){
    if (compt2>0 && compt2<4){
        if(E.disactived == false)  {
            E.disactived=true;
            E.style.backgroundColor="#22B14C";
            F4=0
        }
        else {
            E.disactived=false;
            E.style.backgroundColor="#00FFFF";;
            F4=1
        }
    }                    
}





function init() // Initialisation des lancers de dès
{
    F=0;
    F1=0;
    F2=0;
    F3=0;
    F4=0;
    A.disactived = true;
    B.disactived = true;
    C.disactived = true;
    D.disactived = true;
    E.disactived = true;
       
    compt2=0
    document.getElementById("ancre").innerHTML= "Nombre de lancers :"+" "+compt2;


   image1.onload = function()  { 
        document.getElementById("uneImage1").src = image1.src;  
    } 
    image2.onload = function() { 
        document.getElementById("uneImage2").src = image2.src;    
    }
    image3.onload = function() { 
        document.getElementById("uneImage3").src = image3.src; 
    }
    image4.onload = function() { 
        document.getElementById("uneImage4").src = image4.src;
    } 

    image5.onload = function() { 
        document.getElementById("uneImage5").src = image5.src; 
    } 
     
    image1.src = "images/facey.gif";
    image2.src = "images/facea.gif";
    image3.src = "images/facem.gif";
    image4.src = "images/faces.gif";
    image5.src = "images/facex.gif";
    A.style.backgroundColor="#22B14C";                                       
    B.style.backgroundColor="#22B14C";  
    C.style.backgroundColor="#22B14C";
    D.style.backgroundColor="#22B14C";
    E.style.backgroundColor="#22B14C";
}

    
         
function somme() // somme de la première colonne du tableau
 {
    let a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,q=0,t=0,z=0;
    a=document.forma.un.value;
    if (a== "" || a== null) {
		document.forma.un.value=0;
        a=0
	}
    else { 
	        document.forma.un.value=a;
	}
    b=document.formb.deux.value;
    if (b== "" || b== null) {
		document.formb.deux.value=0;
        b=0
	}
    else {
		document.formb.deux.value=b;
    }
    c=document.formc.trois.value; 
    if (c== "" || c== null) {
		document.formc.trois.value=0;
		c=0
	}
    else   {
		document.formc.trois.value=c;
    }
    d=document.formd.quatre.value;
   if (d== "" || d== null)  {
		document.formd.quatre.value=0;
        d=0
	}
    else {
		document.formd.quatre.value=d;
	}
    e=document.forme.cinq.value;
    if (e== "" || e== null) {
        document.forme.cinq.value=0;
        e=0
	}
     else   {
		document.forme.cinq.value=e;
	}
    f=document.formf.six.value;                     
    if (f== "" || f== null)   {
		document.formf.six.value=0;
        f=0
	}
    else {
		document.formf.six.value=f;
	}
    g=document.formg.bre.value;
    if (g== "" || g== null) {
		document.formg.bre.value=0;
        g=0
	}
    else {
		document.formg.bre.value=g;
	}                
    h=document.formh.full.value;     
    if (h== "" || h== null)   {
		document.formh.full.value=0;
        h=0
	}
    else    {
		document.formh.full.value=h;
    }
    i=document.formi.pesuite.value;
    if (i== "" || i== null) {
		document.formi.pesuite.value=0;
	    i=0
	}
    else {
	     document.formi.pesuite.value=i;
    }
    j=document.formj.grsuite.value;
    if (j== "" || j== null) {
        document.formj.grsuite.value=0;
        j=0
	}
    else  {
		document.formj.grsuite.value=j;
	}
    k=document.formk.chance.value;
    if (k== "" || k== null) {
		document.formk.chance.value=0;
		k=0
	}   
	else {
		document.formk.chance.value=k;
	}
    l= document.forml.carre.value;
    if (l== "" || l== null) {
		document.forml.carre.value=0;
		l=0
	}
    else    {
		document.forml.carre.value=l;
	}
    m=document.formm.quintuple.value;
    if (m== "" || m== null)  {
		document.formm.quintuple.value=0;
		m=0
	}
    else {
		document.formm.quintuple.value=m;
	}
    t=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f);
    if (t>60){
		q=30
    }
    else{
	q=0}
    z=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f)+parseInt(g)+parseInt(h)+parseInt(i)+parseInt(j)+parseInt(k)+parseInt(l)+parseInt(m)+parseInt(q);
    document.form13.total.value=z;
     document.formt.bonus.value=q;
}

function somme1()// somme de la deuxième colonne du tableau
{
    let a1=0,b1=0,c1=0,d1=0,e1=0,f1=0,g1=0,h1=0,i1=0,j1=0,k1=0,l1=0,m1=0,q1=0,t1=0,z1=0;
    a1=document.forma1.un1.value;
    if (a1== "" || a1== null) {
		document.forma1.un1.value=0;
        a1=0
	}
    else  {
		document.forma1.un1.value=a1;
    } 
    b1=document.formb1.deux1.value;
    if (b1== "" || b1== null) {
		document.formb1.deux1.value=0;
        b1=0
	}
     else    {
		document.formb1.deux1.value=b1;
     }
    c1=document.formc1.trois1.value;
    if (c1== "" || c1== null) {
		document.formc1.trois1.value=0;
		c1=0
	}    
	else  {
		document.formc1.trois1.value=c1;
	}
    d1=document.formd1.quatre1.value;
    if (d1== "" || d1== null) {
		document.formd1.quatre1.value=0;
        d1=0}
	else    {
		document.formd1.quatre1.value=d1;
    }
    e1=document.forme1.cinq1.value;
    if (e1== "" || e1== null) {
		document.forme1.cinq1.value=0;
        e1=0
	}
	else {
		document.forme1.cinq1.value=e1;
    }
    f1=document.formf1.six1.value;
    if (f1== "" || f1== null) {
		document.formf1.six1.value=0;
        f1=0
	}
    else {
		document.formf1.six1.value=f1;
    }
    g1=document.formg1.bre1.value;
    if (g1== "" || g1== null)  {
		document.formg1.bre1.value=0;
		g1=0
	}
     else {
		document.formg1.bre1.value=g1;
    }
    h1=document.formh1.full1.value;
    if (h1== "" || h1== null) {
		document.formh1.full1.value=0;
		h1=0
	}
     else  {
		document.formh1.full1.value=h1;
	}
    i1=document.formi1.pesuite1.value;
    if (i1== "" || i1== null) {
		document.formi1.pesuite1.value=0;
        i1=0
	}
    else {
		document.formi1.pesuite1.value=i1;
    }
    j1=document.formj1.grsuite1.value;
    if (j1== "" || j1== null)  {
		document.formj1.grsuite1.value=0;
        j1=0
	}
    else {
		document.formj1.grsuite1.value=j1;
	}
    k1=document.formk1.chance1.value;
    if (k1== "" || k1== null)   {
		document.formk1.chance1.value=0;
        k1=0
	}
    else  {
		document.formk1.chance1.value=k1;
    }
    l1= document.forml1.carre1.value;0
    if (l1== "" || l1== null) {
		document.forml1.carre1.value=0;
        l1=0
		}
    else {
		document.forml1.carre1.value=l1;
    }
    m1=document.formm1.quintuple1.value;
    if (m1== "" || m1== null) {
		document.formm1.quintuple1.value=0;
         m1=0
	}   
	else  {
		document.formm1.quintuple1.value=m1;
	}
                       
    t1=parseInt(a1)+parseInt(b1)+parseInt(c1)+parseInt(d1)+parseInt(e1)+parseInt(f1);
    if (t1>60){
		q1=30
	}
    else {
	q1=0                        
    }
    z1=parseInt(a1)+parseInt(b1)+parseInt(c1)+parseInt(d1)+parseInt(e1)+parseInt(f1)+parseInt(g1)+parseInt(h1)+parseInt(i1)+parseInt(j1)+parseInt(k1)+parseInt(l1)+parseInt(m1)+parseInt(q1);
    document.form13a.total1.value=z1;
    document.formt1.bonus1.value=q1;
}

function somme2() // somme de la troisième colonne du tableau
{
    let a2=0,b2=0,c2=0,d2=0,e2=0,f2=0,g2=0,h2=0,i2=0,j2=0,k2=0,l2=0,m2=0,q2=0,t2=0,z2=0;
    a2=document.forma2.un2.value;
    if (a2== "" || a2== null) {
		document.forma2.un2.value=0;
        a2=0
	}
    else {
		document.forma2.un2.value=a2;
    } 
    b2=document.formb2.deux2.value;
        if (b2== "" || b2== null) {
			document.formb2.deux2.value=0;
            b2=0
	}
    else {
		document.formb2.deux2.value=b2;
    }
    c2=document.formc2.trois2.value;
    if (c2== "" || c2== null) {
		document.formc2.trois2.value=0;
        c2=0
	}
    else {
		document.formc2.trois2.value=c2;
    }
    d2=document.formd2.quatre2.value;
    if (d2== "" || d2== null)  {
		document.formd2.quatre2.value=0;
        d2=0
	}
    else {
	document.formd2.quatre2.value=d2;
	}
    e2=document.forme2.cinq2.value;
    if (e2== "" || e2== null) {
		document.forme2.cinq2.value=0;
        e2=0
	}
    else  {
	     document.forme2.cinq2.value=e2;
    }
    f2=document.formf2.six2.value;
    if (f2== "" || f2== null) {
		document.formf2.six2.value=0;
        f2=0
	}
    else {
		document.formf2.six2.value=f2;
    }
    g2=document.formg2.bre2.value;
	if (g2== "" || g2== null) {
		document.formg2.bre2.value=0;
        g2=0
	}
    else {
		document.formg2.bre2.value=g2;
    }
    h2=document.formh2.full2.value;
    if (h2== "" || h2== null) {
	    document.formh2.full2.value=0;
        h2=0}
    else {
		document.formh2.full2.value=h2;
    }    
    i2=document.formi2.pesuite2.value;
    if (i2== "" || i2== null) {
		document.formi2.pesuite2.value=0;
        i2=0
	}
    else {
		document.formi2.pesuite2.value=i2;
    }
    j2=document.formj2.grsuite2.value;
    if (j2== "" || j2== null)     {
		document.formj2.grsuite2.value=0;
        j2=0
	}
     else {
		document.formj2.grsuite2.value=j2;
	}
    k2=document.formk2.chance2.value;
    if (k2== "" || k2== null) {
		document.formk2.chance2.value=0;
        k2=0
	}
    else {
		document.formk2.chance2.value=k2;
    }
    l2= document.forml2.carre2.value;
    if (l2== "" || l2== null) {
		document.forml2.carre2.value=0;
        l2=0
	}
    else  {
		document.forml2.carre2.value=l2;
	}
    m2=document.formm2.quintuple2.value;
    if (m2== "" || m2== null) {
		document.formm2.quintuple2.value=0;
        m2=0
	}
    else  {
		document.formm2.quintuple2.value=m2;
    }
    t2=parseInt(a2)+parseInt(b2)+parseInt(c2)+parseInt(d2)+parseInt(e2)+parseInt(f2);
    if (t2>60) {
		q2=30
	}
    else{
		q2=0                        
    }
                       
    z2=parseInt(a2)+parseInt(b2)+parseInt(c2)+parseInt(d2)+parseInt(e2)+parseInt(f2)+parseInt(g2)+parseInt(h2)+parseInt(i2)+parseInt(j2)+parseInt(k2)+parseInt(l2)+parseInt(m2)+parseInt(q2);
    document.form13b.total2.value=z2;
    document.formt2.bonus2.value=q2;
}

function somme3()// somme de la quatrième colonne du tableau
{
    let a3=0,b3=0,c3=0,d3=0,e3=0,f3=0,g3=0,h3=0,i3=0,j3=0,k3=0,l3=0,m3=0,q3=0,t3=0,z3=0;
    a3=document.forma3.un3.value;
	if (a3== "" || a3== null)    {
		document.forma3.un3.value=0;
        a3=0
		}
    else {
		document.forma3.un3.value=a3;
		}
    b3=document.formb3.deux3.value;
    if (b3== "" || b3== null) {
			document.formb3.deux3.value=0;
            b3=0
	}
    else  {
			document.formb3.deux3.value=b3;
		}
    c3=document.formc3.trois3.value;
    if (c3== "" || c3== null)  {
			document.formc3.trois3.value=0;
            c3=0
		}
    else {
			document.formc3.trois3.value=c3;
		}
    d3=document.formd3.quatre3.value;
    if (d3== "" || d3== null) {
		document.formd3.quatre3.value=0;
         d3=0
		}
    else  {
		document.formd3.quatre3.value=d3;
		}
    e3=document.forme3.cinq3.value;
    if (e3== "" || e3== null)  {
		document.forme3.cinq3.value=0;
		e3=0
	}
    else {
		document.forme3.cinq3.value=e3;
    }
    f3=document.formf3.six3.value;
    if (f3== "" || f3== null) {
		document.formf3.six3.value=0;
        f3=0
	}
    else  {
		document.formf3.six3.value=f3;
    }
    g3=document.formg3.bre3.value;
     if (g3== "" || g3== null)      {
		document.formg3.bre3.value=0;
        g3=0
	}
    else  {
		document.formg3.bre3.value=g3;
    }
    h3=document.formh3.full3.value;
    if (h3== "" || h3== null)  {
		document.formh3.full3.value=0;
        h3=0
	}
    else {
		document.formh3.full3.value=h3;
    }
    i3=document.formi3.pesuite3.value;
	if (i3== "" || i3== null)     {
		document.formi3.pesuite3.value=0;
        i3=0
	}
    else  {
		document.formi3.pesuite3.value=i3;
    }
    j3=document.formj3.grsuite3.value;
    if (j3== "" || j3== null) 	{
	    document.formj3.grsuite3.value=0;
        j3=0}
    else  {
		document.formj3.grsuite3.value=j3;
     }
    k3=document.formk3.chance3.value;
    if (k3== "" || k3== null) {
		document.formk3.chance3.value=0;
        k3=0
	}
    else {
		document.formk3.chance3.value=k3;
    }
    l3= document.forml3.carre3.value;                       
    if (l3== "" || l3== null) {
		document.forml3.carre3.value=0;
        l3=0
	}
    else  {
		document.forml3.carre3.value=l3;
	}
    m3=document.formm3.quintuple3.value;
     if (m3== "" || m3== null)  {
		 document.formm3.quintuple3.value=0;
         m3=0
		 }
        else {
			document.formm3.quintuple3.value=m3;
        }
        t3=parseInt(a3)+parseInt(b3)+parseInt(c3)+parseInt(d3)+parseInt(e3)+parseInt(f3);
            if (t3>60){
				q3=30}
            else {
				q3=0                        
            }
         z3=parseInt(a3)+parseInt(b3)+parseInt(c3)+parseInt(d3)+parseInt(e3)+parseInt(f3)+parseInt(g3)+parseInt(h3)+parseInt(i3)+parseInt(j3)+parseInt(k3)+parseInt(l3)+parseInt(m3)+parseInt(q3);
        document.form13c.total3.value=z3;
        document.formt3.bonus3.value=q3;
}

function initial()// initialisation des valeurs du tableau
{
    a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,q=0,t=0,z=0;
    a1=0,b1=0,c1=0,d1=0,e1=0,f1=0,g1=0,h1=0,i1=0,j1=0,k1=0,l1=0,m1=0,q1=0,t1=0,z1=0;
    a2=0,b2=0,c2=0,d2=0,e2=0,f2=0,g2=0,h2=0,i2=0,j2=0,k2=0,l2=0,m2=0,q2=0,t2=0,z2=0;
    a3=0,b3=0,c3=0,d3=0,e3=0,f3=0,g3=0,h3=0,i3=0,j3=0,k3=0,l3=0,m3=0,q3=0,t3=0,z3=0;
    document.forma.un.value="";
    document.formb.deux.value="";
    document.formc.trois.value="";
    document.formd.quatre.value="";
    document.forme.cinq.value="";
    document.formf.six.value="";
    document.formg.bre.value="";
    document.formh.full.value="";
    document.formi.pesuite.value="";
    document.formj.grsuite.value="";
    document.formk.chance.value="";
    document.forml.carre.value="";
    document.formm.quintuple.value="";
    document.formt.bonus.value="";
    document.form13.total.value="";

    document.forma1.un1.value="";
    document.formb1.deux1.value="";
    document.formc1.trois1.value="";
    document.formd1.quatre1.value="";
    document.forme1.cinq1.value="";
    document.formf1.six1.value="";
    document.formg1.bre1.value="";
    document.formh1.full1.value="";
    document.formi1.pesuite1.value="";
    document.formj1.grsuite1.value="";
    document.formk1.chance1.value="";
    document.forml1.carre1.value="";
    document.formm1.quintuple1.value="";
    document.formt1.bonus1.value="";
    document.form13a.total1.value="";

    document.forma2.un2.value="";
    document.formb2.deux2.value="";
    document.formc2.trois2.value="";
    document.formd2.quatre2.value="";
    document.forme2.cinq2.value="";
    document.formf2.six2.value="";
    document.formg2.bre2.value="";
    document.formh2.full2.value="";
    document.formi2.pesuite2.value="";
    document.formj2.grsuite2.value="";
    document.formk2.chance2.value="";
    document.forml2.carre2.value="";
    document.formm2.quintuple2.value="";
    document.formt2.bonus2.value="";               
    document.form13b.total2.value="";

    document.forma3.un3.value="";
    document.formb3.deux3.value="";
    document.formc3.trois3.value="";
    document.formd3.quatre3.value="";
    document.forme3.cinq3.value="";
    document.formf3.six3.value="";
    document.formg3.bre3.value="";
    document.formh3.full3.value="";
    document.formi3.pesuite3.value="";
    document.formj3.grsuite3.value="";
    document.formk3.chance3.value="";
    document.forml3.carre3.value="";
    document.formm3.quintuple3.value="";
    document.formt3.bonus3.value="";
    document.form13c.total3.value="";

}


function BloqSubmit() // blocage de la touche " entrée "
 {  
 // Compatibilité IE / Firefox
    if(!event && window.event) {
        event = window.event;
    }
    // IE
    if(event.keyCode == 13) {
        event.returnValue = false;
        event.cancelBubble = true;
    }
    // DOM
    if(event.which == 13) {
        event.preventDefault();
        event.stopPropagation();
    }
	 }