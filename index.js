let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

    $(".producto").click(function () {
        //console.log("entro");
        //traer todo el contenido
        let contenido= $(this).html();
        //traer solo la img
        let imagen=$(".img",this).html();
        console.log(imagen);
        $(".popup").html(contenido);        
        $(".popup , .popup .description , .popup button").show();
    });
    function cerrar() {     
        $(".popup").hide();
    };
