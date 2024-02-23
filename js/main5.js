// paramater function
function checkUserData(username, password){
  var usernameDb = "Fathin";
  var usernamedb2 ="Fayyadh";
     var PasswordDB="123pp";
    if(username==usernameDb ){
        if (password==PasswordDB) {
            alert("Password Mu Tersedia ");
        } 
        else 
        {
            alert("Password mu salah ");
        }
        alert("Username Tersedia");
         }
else if(username=usernamedb2){
    alert("Username Tersedia");
}
        else{
        alert("username Tidak teresedia");
        }
        
        
    }
// Belajar sweitch dan case

    var tabungan = 200000;

    switch (tabungan){
        case  0:
            console.log("kerja dulu lah Bro");
            break;
            case 150000:
            case 100000:
            console.log("Beli Mobil Kijang Inova");
            break;   
            case 200000:
            console.log("Beli Mobil Honda Jaaz");
            break; /* break ini berfungsi menghentikan perulangan   */
            default:
            console.log("Tidak ada pilihan");    
    }