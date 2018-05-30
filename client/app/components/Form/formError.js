import React from 'react';

export const formErrors = ({formErrors}) =>
<div className = 'formErrors'>
{object.keys(formErrors).map((fieldName,i)=>{
  if(formErrors[fieldName].length >0){
    return(
      <p key = {i}>{fieldName}{formErrors[fieldName]}</p>
    )
  }else{
    return'';
  }
})


  }

</div>
