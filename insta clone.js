// 1. HTML me se us element ko dhoond kar 'red' variable me save kiya jiski ID 'red' hai
const red = document.getElementById("red");

// 2. Element par click event lagaya, yaane jab bhi user click karega tabhi niche ka code chalega
red.addEventListener("click", () => {

    // 3. 'bi-heart' (khaali dil) class ko toggle kiya (agar bi-heart class hai toh hatao, nahi hai toh lagao)
    red.classList.toggle("bi-heart");
    // bi-heart----> khali dil

    // 4. 'bi-heart-fill' (bhara hua dil) class ko toggle kiya
    red.classList.toggle("bi-heart-fill");
    // bi-heart-fill---> bhara hua dil.
    
    // 5. Check kiya ki kya element ke paas abhi 'bi-heart-fill' wali class hai?
    if (red.classList.contains("bi-heart-fill")) {
        
        // Agar bhara hua dil hai(bi-heart-fill class), toh rang badal kar green (hara) kar do
        red.style.color = "green";
        
    } else {
        
        // Agar khaali dil hai, toh rang badal kar red (laal) kar do
        red.style.color = "red";
    }

});
