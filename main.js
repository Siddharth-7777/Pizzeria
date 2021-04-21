menularray = ["Sweety Pizza", "Supreme King Pizza", "Beauty Queen Pizza", "Naughty Son Pizza", "Lovely Pizza"]

function getmenu() {
    var htmldata;
    htmldata= "<ol class='menulist'>"
    menularray.sort()
    for (var i = 0; i < menularray.length; i++) {
        htmldata=htmldata+'<li>'+menularray[i]+ '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
    
}

function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menularray.push(item)
    menularray.sort()
    htmldata="<section class='cards'>"
    for (var i = 0; i < menularray.length; i++) {
        htmldata=htmldata+'<div class="card">' + '<img src="images/pizzaImg.png"/>' + menularray[i] + '</div>'
        
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_menu").innerHTML = htmldata;
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}