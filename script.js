let sec = 0, min=0, hours = 0, intervalid;

const startStopWatch= ()=> {

    intervalid= setInterval(()=>{
            if(sec < 59){
                sec++;
            }else if(min >=59){
                hours++;
                min=0;
            }else{
                sec= 0;
                min++;
            }



            const second = sec.toString().padStart(2, "0");
            const minute  = min.toString().padStart(2, "0");
            const hour  = hours.toString().padStart(2, "0");


        const clockchange = document.getElementById("mypar").innerText= `${hour}:${minute}:${second}`
        console.log("button pressed ");


        }, 1000);
}

const stopStopWatch =()=>{
    console.log("Again tey button is pressed ")
    clearInterval(intervalid)

}



