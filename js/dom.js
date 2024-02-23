// Dom Beginers

// select element
// var titlecarone = document.getElementById('cardname1');
// titlecarone.innerHTML="BMW M4";

// // var buttonPrimary = document.getElementsByTagName('a'); /* untuk mengaanti nama pada element id */
// var buttonPrimary = document.querySelectorAll('a.btn-view-details');

// console.log(buttonPrimary);
// // buttonPrimary[0].innerHTML="Sold out";/* cara menggunakan element tagname  */
// var barang = true; /*  tipe data boolean */

// for (var i=0; i<buttonPrimary.length; i++){
//     if(!barang){

//         buttonPrimary[i].innerHTML = "Sold Out"; 
//         buttonPrimary[i].classList.add('btn-danger');
//         buttonPrimary[i].classList.remove('btn-primary');
//         buttonPrimary[i].classList.add('disabled');
//     }
//     else{

//     }
// }/*  ini berfungsi untuk menselect item pilihan pada id sehingga  */

// // barang tersedia

// var barang = true;

var cars = document.getElementById('cars');
var i = 0;

function savecar(){

    carname =document.getElementById('name').value;
    carprice =document.getElementById('price').value;
    carimage =document.getElementById('image').value;

    i++;
    cars.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-6 col-12 card">
    <img src="`+carimage +`">
    <h3 class="mt-3" id="cardname1">` +
     carname + 
    `</h3>
    <p>$` +
    carprice +
    `</p>
    <p>
        <a href="#" class="btn btn-view-details btn-primary w-100">View Details</a>
        
        <a href="#" class="btn mt-2 btn-primary w-100">Book Now</a>
    </p>
</div>
</div>`;
carname =document.getElementById('name').value ='';
    carprice =document.getElementById('price').value='';
    carimage =document.getElementById('image').value ='';

}