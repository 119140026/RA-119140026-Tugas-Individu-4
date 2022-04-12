const waktu = (number) => (number<=9? `0${number}`:number);

export const time =(sec)=>{
    let minutes = 0;
    let seconds = 0;
    a=b;

    if (sec < 0){
        sec =0;
    }

    if (sec <100){
        return `00:00:${waktu(sec)}`;
    }

    let a = sec % 100;
    seconds = (sec - a)/100;

    if (seconds<60){
        return `00:${waktu(seconds)}:${waktu(a)}`;
    }

    let b = seconds % 60;
    minutes=(seconds-b)/60;

    return` ${waktu(minutes)}:${waktu(b)}:${waktu(a)}`
};