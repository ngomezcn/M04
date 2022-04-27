function eliminarItem() {

  var select = document.getElementById('dropdown');
  
  array = []

 for (let index = 0; index < select.length; index++) {
   const element = select[index].value;
   array.push(element)
   
 }

 window.alert(select.length + ' - ' + array)

}
  