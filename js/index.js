let allStudents = [];

addStudent = () => {
    let names = document.getElementById("names").value
    let email = document.getElementById("email").value
    let number = +document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value



let spam = document.getElementsByName("Newsletters")

    for(let i=0; i < spam.length; i++){
        if(spam[i].checked){

            allStudents.push({
                firstName: names,
                email: email,
                studentNumber: number,
                studentSubject: subject
             
        
        
               })
               alert("Welcome " + names + "! Thank you for your interest in " + subject + "! We will contact you via the email provided:  " + email + ", or alternatively on the phone number: " + number);
        }else{
            alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + names + "!  If you want to sign up, you better CHECK that newsletter box! ")
        }

      console.log(allStudents)
        
    }
}



