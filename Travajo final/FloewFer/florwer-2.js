function mensaje(){

  swal("Introdusca su Nombre para emviar el mensaje", {
    content: "input",
    
  })
  .then((value) => {
    swal(`--->${value}<---` ,{
      title: "Estas seguro que te llamas asi? ",

icon: "info",
buttons: ["No","Si"],
dangerMode: true,
})
.then((willDelete) => {
if (willDelete) {
  swal("Su comentario as sido enviado", {
    icon: "success",
      buttons: "Gracias",
    
  });
} else {
  swal("De acuerdo, su mensage se cancelo",{icon:'error',
  buttons: "Gracias",
});
}
})
  });
}