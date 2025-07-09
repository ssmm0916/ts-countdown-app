const currentYear:number=new Date().getFullYear();
const newYears:string=`1 Jan ${currentYear+1}`;
const newYearsDate:Date=new Date(newYears);

let daysElement:HTMLElement | null=null;
let hoursElement:HTMLElement | null=null;
let minutesElement:HTMLElement | null=null;
let secondsElement:HTMLElement | null=null;

const initialElement=():void=> {
    daysElement=document.getElementById("days");
    hoursElement=document.getElementById("hours");
    minutesElement=document.getElementById("minutes");
    secondsElement=document.getElementById("seconds");
};

const countdown=():void=> {
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error("要素が見つかりませんでした");
        return;
    }

    const currentDate:Date=new Date();
    const totalSeconds:number=(newYearsDate.getTime()-currentDate.getTime())/1000;

    const days:number=Math.floor(totalSeconds/3600/24);
    const hours:number=Math.floor(totalSeconds/3600)%24;
    const minutes:number=Math.floor(totalSeconds/60)%60;
    const seconds:number=Math.floor(totalSeconds)%60;

    daysElement.innerText=formatTime(days);
    hoursElement.innerText=formatTime(hours);
    minutesElement.innerText=formatTime(minutes);
    secondsElement.innerText=formatTime(seconds);
};

const formatTime=(time:number):string=> {
    return time<10 ? `0${time}`:String(time);
};

document.addEventListener("DOMContentLoaded",()=> {
    initialElement();
    countdown();

    setInterval(countdown,1000);
});