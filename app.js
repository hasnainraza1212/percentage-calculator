
var heading = document.getElementById("heading");
var userName = prompt("Pease enter your name");
var updatedName = []
var firstLetter = [];
var remainingLetters = []
userName = userName.trim()
var flag = false;
if (userName === null || userName === "") {
    heading.innerText = `Hello Dear User`

} else {
    userName = userName.split(" ");

    for (var i = 0; i < userName.length; i++) {
        firstLetter.push(userName[i][0].toUpperCase())
        remainingLetters.push(userName[i].slice(1).toLowerCase())
    }
    for (var i = 0; i < userName.length; i++) {

        var temp = firstLetter[i] + remainingLetters[i]
        updatedName.push(temp);
    }
    userName = updatedName.join(" ");
    heading.innerText = `Hello ${userName}`




}

function calc() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var input4 = document.getElementById("input4");
    var total1 = document.getElementById("total1");
    var total2 = document.getElementById("total2");
    var total3 = document.getElementById("total3");
    var total4 = document.getElementById("total4");
    var marks1 = parseInt(input1.value);
    var marks2 = parseInt(input2.value);
    var marks3 = parseInt(input3.value);
    var marks4 = parseInt(input4.value);
    var obatain = (marks1 + marks2 + marks3 + marks4);
    total1 = parseInt(total1.value);
    total2 = parseInt(total2.value);
    total3 = parseInt(total3.value);
    total4 = parseInt(total4.value);
    var total = (total1 + total2 + total3 + total4);

    var perc = ((obatain / total) * 100).toFixed(2);

    if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3) || isNaN(marks4) || isNaN(total1) || isNaN(total2) || isNaN(total3) || isNaN(total4)) {
        var calBtn = document.getElementById("calBtn");
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'please fill out all the fields',
            showConfirmButton: false,
            timer: 2000
        })
    }

    if (perc >= 80) {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${perc} % Grade grade is A<sup>+<sup>`,
            showConfirmButton: false,
            timer: 5000
        })

    }

    else if (perc < 80 && perc >= 70) {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${perc} % Grade B<sup>+<sup>`,
            showConfirmButton: false,
            timer: 5000
        })

    }

    else if (perc < 70 && perc >= 60) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${perc} % Grade C<sup>+<sup>`,
            showConfirmButton: false,
            timer: 5000
        })

    }
    else if (perc < 60 && perc >= 50){

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${perc} % Single sheet  of paper can't decide your future`,
            showConfirmButton: false,
            timer: 5000
        })


    }





}

