
const prices = {
  mohinga: 89,
  shan: 99,
  curry: 129,
  laphet: 89,
  snacks: 59,
  family: 349,
  catering: 599
};

function updateTotal(){
  const select = document.querySelector("#item");
  const qty = Math.max(1, parseInt(document.querySelector("#qty").value || "1",10));
  const total = select ? prices[select.value] * qty : 0;
  const totalBox = document.querySelector("#total");
  if(totalBox) totalBox.textContent = `Estimated food total: ฿${total.toLocaleString()}`;
}
document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll("#item,#qty").forEach(el=>el.addEventListener("input",updateTotal));
  updateTotal();

  const form = document.querySelector("#orderForm");
  if(form){
    form.addEventListener("submit", e=>{
      e.preventDefault();
      if(!form.checkValidity()){
        form.reportValidity();
        return;
      }
      document.querySelector("#success").textContent =
        "Thank you! Your order request is ready. For this proposal website, please confirm the order through LINE, Facebook, or Instagram.";
      document.querySelector("#success").style.display="block";
      window.scrollTo({top:document.querySelector("#success").offsetTop-120,behavior:"smooth"});
    });
  }
});
