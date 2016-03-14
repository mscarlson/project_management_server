
var randomCompanyName=['Seagate','4M','Apple','Banana Republic','Prime Digital Academy','Scott and Company','Mark and Sons','Michael Cripto Photo', "Michelle's Press", "Roman's Randoms"];

var serverPoints;
var frontEndPoints;
var clientSidepoints;

$(document).ready( function(){

    init();
    enable();

});


function init(){





    //this is ajax calls and appending dom
}

function enable(){
    //event listeners
    $('.btn-generateProject').on('click', generateProject);
    $('.projectInfo').on('click', '.assignStaff', fetchStaff);
    }



//

function generateProject(){
    randomizeSpritePoints();
    randomizeCompanyInfo();


}

function fetchStaff(){

    $.ajax({
       type: 'GET',
        url: '/addEmployee',
        success: function(responseFromServer){
            console.log(responseFromServer);
        }
    });

}

function randomizeCompanyInfo(){
    $('.companyStuff').remove();
    $('.projectInfo').append('<div class="companyStuff"></div>');
    var $el = $('.projectInfo').children().last();

    var randomIndex = randomNumber(0, randomCompanyName.length-1);
    $el.append('<h2 class="companyName">'+randomCompanyName[randomIndex]+'</h2> ');
    $el.append('<button class="assignStaff">Assign Staff</button>');
    appendRamdonizedPoints();
}


function randomizeSpritePoints() {
    serverPoints = randomNumber(10, 60);
    frontEndPoints = randomNumber(10, 60);
    clientSidepoints = randomNumber(10, 60);

}

function appendRamdonizedPoints(){
    $('.companyName').append('<div class=""></div>');
    var $el = $('.companyName').children().last();
    $el.append('<h5 id="appendRamdonizedPoints">'+"Server Side Sprites: "+serverPoints +'</h5>');
    $el.append('<h5 id="appendRamdonizedPoints">'+"FrontEnd Sprites: "+frontEndPoints +'</h5>');
    $el.append('<h5 id="appendRamdonizedPoints">'+"Client Side Sprites: "+clientSidepoints +'</h5>');

    console.log(serverPoints ,frontEndPoints, clientSidepoints);
}


var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);

};