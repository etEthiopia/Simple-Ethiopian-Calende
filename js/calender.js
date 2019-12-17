var edays = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var adays = ["፩","፪","፫","፬","፭","፮","፯","፰","፱","፲","፲፩","፲፪","፲፫","፲፬","፲፭","፲፮","፲፯","፲፰","፲፱","፳","፳፩","፳፪","፳፫","፳፬","፳፭","፳፮","፳፯","፳፰","፳፱","፴"];
var epdays =[1,2,3,4,5];
var apdays = ["፩","፪","፫","፬","፭"];
var epsdays = [1,2,3,4,5,6];
var apsdays = ["፩","፪","፫","፬","፭","፮"];
var days=[];
var pdays=[];
var psdays=[];
var year;
var month = 1;
var monthh;
var zemenblue = 5500;
var ametealem;
var ndays;
var autostart=true;
var daystart;
var jan = ["1 እንቁጣጣስ", "17 መስቀል"];
var feb =[];
var mar = [];
var apr = ["29 ገና"];
var may = ["11 ጥምቀት"];
var jun = ["23 የአድዋ ድል"];
var jul = [];
var aug = ["23 የላብ አደሮች ቀን", "27 የአርበኞች መታሰቢያ"];
var sep = ["20 ደርግ የወደቀበት"];
var oct = [];
var nov = [];
var dec = [];
var pwa = [];
var hmonths = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec,pwa];

var jandays=["su11","mo11","tu11","we11","th11","fr11","sa11",
			"su12","mo12","tu12","we12","th12","fr12","sa12",
			"su13","mo13","tu13","we13","th13","fr13","sa13",
			"su14","mo14","tu14","we14","th14","fr14","sa14",
			"su15","mo15","tu15","we15","th15","fr15","sa15",
            "su16","mo16","tu16","we16","th16","fr16","sa16"];
var febdays=["su21","mo21","tu21","we21","th21","fr21","sa21",
			"su22","mo22","tu22","we22","th22","fr22","sa22",
			"su23","mo23","tu23","we23","th23","fr23","sa23",
			"su24","mo24","tu24","we24","th24","fr24","sa24",
			"su25","mo25","tu25","we25","th25","fr25","sa25",
            "su26","mo26","tu26","we26","th26","fr26","sa26"];
var mardays=["su31","mo31","tu31","we31","th31","fr31","sa31",
			"su32","mo32","tu32","we32","th32","fr32","sa32",
			"su33","mo33","tu33","we33","th33","fr33","sa33",
			"su34","mo34","tu34","we34","th34","fr34","sa34",
			"su35","mo35","tu35","we35","th35","fr35","sa35",
            "su36","mo36","tu36","we36","th36","fr36","sa36"];
var aprdays=["su41","mo41","tu41","we41","th41","fr41","sa41",
			"su42","mo42","tu42","we42","th42","fr42","sa42",
			"su43","mo43","tu43","we43","th43","fr43","sa43",
			"su44","mo44","tu44","we44","th44","fr44","sa44",
			"su45","mo45","tu45","we45","th45","fr45","sa45",
            "su46","mo46","tu46","we46","th46","fr46","sa46"];
var maydays=["su51","mo51","tu51","we51","th51","fr51","sa51",
			"su52","mo52","tu52","we52","th52","fr52","sa52",
			"su53","mo53","tu53","we53","th53","fr53","sa53",
			"su54","mo54","tu54","we54","th54","fr54","sa54",
			"su55","mo55","tu55","we55","th55","fr55","sa55",
            "su56","mo56","tu56","we56","th56","fr56","sa56"];
var jundays=["su61","mo61","tu61","we61","th61","fr61","sa61",
			"su62","mo62","tu62","we62","th62","fr62","sa62",
			"su63","mo63","tu63","we63","th63","fr63","sa63",
			"su64","mo64","tu64","we64","th64","fr64","sa64",
			"su65","mo65","tu65","we65","th65","fr65","sa65",
            "su66","mo66","tu66","we66","th66","fr66","sa66"];
var juldays=["su71","mo71","tu71","we71","th71","fr71","sa71",
			"su72","mo72","tu72","we72","th72","fr72","sa72",
			"su73","mo73","tu73","we73","th73","fr73","sa73",
			"su74","mo74","tu74","we74","th74","fr74","sa74",
			"su75","mo75","tu75","we75","th75","fr75","sa75",
            "su76","mo76","tu76","we76","th76","fr76","sa76"];
var augdays=["su81","mo81","tu81","we81","th81","fr81","sa81",
			"su82","mo82","tu82","we82","th82","fr82","sa82",
			"su83","mo83","tu83","we83","th83","fr83","sa83",
			"su84","mo84","tu84","we84","th84","fr84","sa84",
			"su85","mo85","tu85","we85","th85","fr85","sa85",
            "su86","mo86","tu86","we86","th86","fr86","sa86"];
var sepdays=["su91","mo91","tu91","we91","th91","fr91","sa91",
			"su92","mo92","tu92","we92","th92","fr92","sa92",
			"su93","mo93","tu93","we93","th93","fr93","sa93",
			"su94","mo94","tu94","we94","th94","fr94","sa94",
			"su95","mo95","tu95","we95","th95","fr95","sa95",
            "su96","mo96","tu96","we96","th96","fr96","sa96"];
var octdays=["sua1","moa1","tua1","wea1","tha1","fra1","saa1",
			"sua2","moa2","tua2","wea2","tha2","fra2","saa2",
			"sua3","moa3","tua3","wea3","tha3","fra3","saa3",
			"sua4","moa4","tua4","wea4","tha4","fra4","saa4",
			"sua5","moa5","tua5","wea5","tha5","fra5","saa5",
            "sua6","moa6","tua6","wea6","tha6","fra6","saa6"];
var novdays=["sub1","mob1","tub1","web1","thb1","frb1","sab1",
			"sub2","mob2","tub2","web2","thb2","frb2","sab2",
			"sub3","mob3","tub3","web3","thb3","frb3","sab3",
			"sub4","mob4","tub4","web4","thb4","frb4","sab4",
			"sub5","mob5","tub5","web5","thb5","frb5","sab5",
            "sub6","mob6","tub6","web6","thb6","frb6","sab6"];
var decdays=["suc1","moc1","tuc1","wec1","thc1","frc1","sac1",
			"suc2","moc2","tuc2","wec2","thc2","frc2","sac2",
			"suc3","moc3","tuc3","wec3","thc3","frc3","sac3",
			"suc4","moc4","tuc4","wec4","thc4","frc4","sac4",
			"suc5","moc5","tuc5","wec5","thc5","frc5","sac5",
            "suc6","moc6","tuc6","wec6","thc6","frc6","sac6"];
var puadays=["sud1","mod1","tud1","wed1","thd1","frd1","sad1",
            "sud2","mod2","tud2","wed2","thd2","frd2","sad2",
			"sud3","mod3","tud3","wed3","thd3","frd3","sad3",
			"sud4","mod4","tud4","wed4","thd4","frd4","sad4",
			"sud5","mod5","tud5","wed5","thd5","frd5","sad5",
            "sud6","mod6","tud6","wed6","thd6","frd6","sad6"];
var totallist=[jandays,febdays,mardays,aprdays,maydays,jundays,juldays,augdays,sepdays,octdays,novdays,decdays,puadays];
lang();
function lang(){
    
    langg = document.getElementById("lang").value;
    days=[];
    pdays=[];
    psdays=[];
    if(langg=="Amharic"){
            days=adays;
            pdays=apdays;
            psdays=apsdays;
    }
    else{
            days=edays;
            pdays=epdays;
            psdays=epsdays;
    }


}


var zemen;
var j=0;
var h=0;
var month;
function hmonth(){
    lang();
year = document.getElementById("yearr").value;
start();
var mtables = document.getElementsByClassName("mtable");

h=0;
document.getElementById("holiday").innerHTML="";
var mon = parseInt(document.getElementById("monthh").value);
//alert(mon);
//alert(mtables.length);

var mth=0;
while(mth<13){
    //alert(mt+1);
        document.getElementById((mth+1).toString()).hidden=false;
    mth++;
}
var mt=0;
while(mt<13){
    //alert(mt+1);
    if(mt+1!=mon){
        document.getElementById((mt+1).toString()).hidden=true;
    }
    mt++;
}
monthh = hmonths[mon-1];

while(h<monthh.length){
    document.getElementById("holiday").innerHTML+=monthh[h]+"<br/>";
    h++;
}
}
if (autostart == true){
    lang();
    setdate(2010);
    j=0;
}
var z = 0;
var m;
function start(){
    lang();
    z=0;
    autostart = false;
    j=0;
    year = document.getElementById("yearr").value;
    document.getElementById("holiday").innerHTML="";
    while(z<13){
     m=0;
    var lisst=totallist[z];
    while(m<42){
        
        document.getElementById(lisst[m]).innerHTML="";
        m++;
    }
    z++;
}
    setdate(year);
    
}

function setdate(y){
    var len =30;
    var startdateplus=0;
    var pua;
    var mth=0;
    while(mth<13){
    //alert(mt+1);
        document.getElementById((mth+1).toString()).hidden=false;
    mth++;
    }
    switch(y%4){
        case 0:
            zemen = "ዮሓንስ";
           
            pua = 5;
            break;
        case 1:
            zemen = "ማቴዎስ";
  
            pua = 5;
            break;
        case 2:
            zemen = "ማርቆስ";

            pua = 5;
            break;
        case 3:

            zemen = "ሉቃስ";
            pua = 6;
            break;
    }
    var x = document.getElementsByClassName("mtyear");
    for(var k=0;k<x.length;k++){
        x[k].innerText=zemen;
    }
    while(j<13){
        switch(j){
            case 12:
                len = pua;
                break;
        }

    

    year=parseInt(y);
    ametealem = zemenblue + year;
    ndays = ametealem+ametealem/4 +(month -1)*30 +2;
    daystart = ((ndays+6)%7);
    daystart = parseInt(daystart);
    var list=totallist[j];
    var i=1;

    document.getElementById(list[daystart].toString()).innerHTML=days[i-1];
    while(i<len){
        var p = i+1;
        document.getElementById(list[daystart+i]).innerHTML=days[i];
        i++;
    }
    j++;
    month++;
}
autostart = true;
j=0;
month=1;
}


