function cilindro() {

  const r = document.getElementsByName('R')[0].value
  const h = document.getElementsByName('H')[0].value
  // window.alert(select.length + ' - ' + array)
  const result= (Math.PI * (r*r) * h)
  console.log(result)
  event.preventDefault();

} 
  