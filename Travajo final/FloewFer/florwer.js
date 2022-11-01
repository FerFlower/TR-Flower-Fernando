function fncEnviar(){
    swal({
        title: "Ay un probema!! Desea esperar?",
  text: "La pagina wed todavia esta en fase -BETA-",
  icon: "warning",
  buttons: ["No","Si"],
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Gracias por su comprencio profe, me falto tiempo para acabarlo.", {
      icon: "success",
        buttons: "ya",
      
    });
  } else {
    swal("No se pudo ejecutar. \nPor fabor espere que termine la fase -BETA-.",{icon:'error',
    buttons: "De acuerdo",
});
  }
})}