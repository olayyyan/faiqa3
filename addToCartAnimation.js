$(document).ready(function(){
  itemCount = 0;

  $(".btnAdd").on("click",function(){
    itemCount += 1;
    if (itemCount <= 99){
      $(".checkoutBadge").text(itemCount);
      console.log(itemCount);
    } else{
      $(".checkoutBadge").textContent = "99";
      itemCount = 99;
     }
   })

  $(".btnRemove").on("click",function(){
    itemCount -= 1;
      if (itemCount >= 0 && itemCount <= 99){
        $(".checkoutBadge").text(itemCount);
      }else if (itemCount < 0){
        itemCount = 0;
      }
    })
})
