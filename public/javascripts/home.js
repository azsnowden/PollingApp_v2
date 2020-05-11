
const submitButton = document.querySelector("button")
submitButton.addEventListener("click", function(e){
    e.preventDefault()
    console.log("clicked")
    let teams = document.getElementsByName('Team')
    let teamValue;
    for (var i=0; i < teams.length; i++){
        if(teams[i].checked){
            teamValue = teams[i].value
        }
    }
    console.log(teams)
    console.log(teamValue)
    // window.location.pathname = '/ThankYou'
    
    })