let studenten = [
    {
        id:1,
        naam:"Jos",
        cursus:"Java",
        punten:55
    },
    {
        id:2,
        naam:"Jere",
        cursus:"Java",
        punten:100
    },
    {
        id:2,
        naam:"Manon",
        cursus:"Java",
        punten:70
    },
    {
        id:2,
        naam:"Sandy",
        cursus:"Java",
        punten:20
    }
 ]

 let geslaagd = studenten.filter(diploma);

 function diploma(punt){
    return punt.punten <=50;
 }

 console.log(geslaagd);

 
    studenten.map((student)=>{
        if(student.punten > 50){
            document.querySelector("#tabelGeslaagd>tbody").innerHTML += `<tr>
            <td>${student.naam}</td>
            <td>${student.cursus}</td>
            <td>${student.punten}</td>
            </tr>`
        } else{
            document.querySelector("#tabelNietGeslaagd>tbody").innerHTML += `<tr>
            <td>${student.naam}</td>
            <td>${student.cursus}</td>
            <td>${student.punten}</td>
            </tr>`
        }
        
    })


