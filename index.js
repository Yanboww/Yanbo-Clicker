/*Student Counter App*/
count = 0
function increment(){
    count++;
    console.log(count)
    counter = document.getElementById("count-el")
    counter.innerHTML = count
    setTimeout(checkCount,300)
    console.log(counter)
}

function save()
{
    document.getElementById("prev").innerHTML += count+" - "
}
function checkCount()
{
    if(count == 34 ){
        alert("A whole class worth of students entered!")
    }
    else if(counter == 1500){
        alert("A whole grade worth of students entered")
    }
    else if(count == 6000){
        alert("The whole school is present!")
    }
}
