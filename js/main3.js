//  belajar  Operator 
var container1 = 100;
var container2 = 200 ;
var TtlContainer = container1 + container2;

// tipe value (" + , > , < , -,  ==( ture dan false) ,!=(Apakah Fariabel tersebut sama dan ini menimbukan jwbn true dan false) ")
//  menampilkan 
 
console.log (TtlContainer);


//Logical Oparator (" AND ") 
 var usernameDiDatabase = "pelanggan" ;
 var passwordDiDatabase = "123aa";
 
 var usernameDariinputUser = "pelanggan" ;
 var passwordDariinputUser = "1111aa";

 var validasiDataLogin = usernameDariinputUser == usernameDiDatabase &&  passwordDariinputUser == passwordDiDatabase 

//  Logical Operator (&& ini adalah penggunaan "dan"  dan ini || penggunaan "atau" didalam logical opertor )

//  menampilkan 
console.log(validasiDataLogin);

//  penggunaan logical "atau" (" OR ")
var cuaca = "tidak hujan";
var cuaca2 = "salju";
var pakekJaket = cuaca == "hujan" || cuaca2 == "salju" 
//  dia akan mengambil nilai true di berbagai kondosi , jika tidak ada maka kondisi dinyatakan false , dan jikan salah satu ada yang benar maka akan dinyatakan benar


console.log(pakekJaket);
