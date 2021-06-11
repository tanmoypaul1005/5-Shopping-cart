function handleProductChange(product,isIncrease){
    const productInput= document.getElementById(product+'-Count');
    const productCount=parseInt(productInput.value);
    let productNewCount;
    if(isIncrease == true){
     productNewCount=productCount+1;
    
    }
    else if(isIncrease == false && productCount > 0){
     productNewCount=productCount-1;
    
    }
    productInput.value=productNewCount;
  
  let productTotal
  if(product=='phone'){
      productTotal=productNewCount*1219;
  }
  else if(product=='case'){
     productTotal=productNewCount*59;
  }
    document.getElementById(product+'-total').innerText=productTotal;
    calculateTotal();
  }  
  
  
  function calculateTotal(){
     const phoneCount=getInputvalue('phone');
     const caseCount=getInputvalue('case');
  
     const totalprice=phoneCount*1219 +caseCount*59;
     document.getElementById('total-price').innerText=totalprice;
  
  
     const tax=Math.round(totalprice*0.1);
     document.getElementById('tax-amount').innerText=tax;
  
     const grandTotal=totalprice+tax;
     document.getElementById('grand-total').innerText=grandTotal;
  }
  
  function getInputvalue(product){
     const productInput=document.getElementById(product+'-Count');
     const productCount=parseInt(productInput.value);
     return productCount;
  }
  
  // function handleProductChange(isIncrease){
  //   const productInput= document.getElementById('phone-Count');
  //   const productCount=parseInt(productInput.value);
  //   let productNewCount;
  //   if(isIncrease == true){
  //    productNewCount=productCount+1;
  //   }
  //   else if(isIncrease == false && productCount > 0){
  //    productNewCount=productCount-1;
  //   }
  //   productInput.value=productNewCount
  // const productTotal=productNewCount*1219;
  //   document.getElementById(product+'-total').innerText=productTotal;
  // }  
  
  
  