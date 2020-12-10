










function btn_click(obj){

      let elementId= obj.getAttribute('id');
      console.log(elementId.valueOf());

      //var element = document.querySelector('#'+elementId);

      var element = document.getElementById(elementId);

      console.log(element);

       var style = getComputedStyle(element);

      var color = style.backgroundColor;
      console.log(color);
    
      document.body.style.background= color;
  
 
   
}