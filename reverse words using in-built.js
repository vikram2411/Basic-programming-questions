<script>
  var newString = ""; 
  var theString = prompt("Enter a Phrase that you would like to reverse (Ex. Hello world)"); 

  newString = theString.split(" ").reverse().join(" ")


  document.write(newString);
</script>
