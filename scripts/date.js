function heure()
{
    days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    months = ['janvier','février','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','décembre'];
    let now   = new Date();
    let day   = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    if(day <=9)
        day='0'+ day;
    if(month <=9)
        month='0'+ month;
    if(hour <=9)
        hour='0'+ hour;
    if (min <= 9)
        min = '0' + min;
    if (sec <= 9)
        sec = '0' + sec;

    let result = days[now.getDay()] + " " + day + " " + months[now.getMonth()] + " " + now.getFullYear();
    time=(hour +':'+ min +':'+ sec);
    setTimeout(heure, 1000);
    document.getElementById("ancrage").innerHTML= result + " à " + time;
}

heure();
