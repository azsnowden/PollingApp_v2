function check(form)/*function to check userid & password*/
    
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value === "1" && form.pswrd.value === "1")
  {
    window.open('Admin.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}