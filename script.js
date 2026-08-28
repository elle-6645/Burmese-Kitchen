const prices={mohinga:89,shan:99,curry:129,laphet:89,snacks:59,family:349,catering:599};
const item=document.getElementById('item');
const qty=document.getElementById('qty');
const total=document.getElementById('total');
function updateTotal(){if(!item||!qty||!total)return;const p=prices[item.value]||0;const q=Math.max(1,Number(qty.value)||1);total.textContent=`Estimated food total: ฿${(p*q).toLocaleString()}`}
if(item&&qty){item.addEventListener('change',updateTotal);qty.addEventListener('input',updateTotal);updateTotal()}
const form=document.getElementById('orderForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const success=document.getElementById('success');success.style.display='block';success.textContent='Thank you! Your order request has been received. We will contact you to confirm the order.';success.scrollIntoView({behavior:'smooth',block:'center'});})}
