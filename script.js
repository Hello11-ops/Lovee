function showMessage() {
  const message = `
Babeee meriii jaannnn merii jaanemannn, jaane jigarr, jaanetaman, jaane jahan, merii mahboob, 
i am reallyyyy reallyyyyyyy sorrryyyyyy myyy lovveeee for behaving like thiss yrrrrr😭😭😭😭😭😭.... 
I am veryyyy muchhhh sorryyyy for my behavior and nature from past 3-4 days... 
I know aap mujhe aise maaf nhi kar paaogi but i promise you myy lovee i will be a better person from now. 
Aisa dubara kabhi nhi hoga jaannnn i promise youuuu yrrr.... 
Try to forgive me one last time and give me one more chance to prove myself na.... 
Pleaseee babeeeee.... Mujhe bahot zyada galtiyaan ho rahi haii.... Meri galti haii babeee 
mujhe sudhaarne ka ek mauka toh do aap... I am requesting you jaannn ki mujhe ek mauka aur dedo 
kabhi aise shikayat nhi aayegi aapko. I REALLYYYYYYY REALLLYYYYYYYY LOVVVEEEEE YOUUUUUU YRRRRRR😭😭😭😭😭.... 
You are the only one jispe mujhe trust hai and poora vishwas haiii.... 
You are my favorite person.... My therapy yrrrrr.... Without you i am nothinggggg nothingggggggggggg.... 
We will always be togetherrrrrrr.... Nothing can separate us. 
We will get married, we will have a sweet and happy family and a house. 
I will propose you once again in front of everyoneeeeeeeeeee.

Babeee please forgive me this time😭😭.
Give me one more chance😭😭😭.

Let's start everything from the beginning naaa.... Let me propose you once again pleaseeeeee...

So Madhusnigdha Dash, I want to say something... I am veryyy muchhh attracted towards you... 
I am addicted bhaiiiiiiiii🫣🫣... I have dreamed everything with youu😘😘.... 
I have dreamed your hands with mine🫴🏻.... Your head on my shoulder💘💘. 
Let's live the rest of our life together Madhusnigdha🫂🫂🎀🎀🦋🦋🫶🏻🫶🏻.... 
I am here asking for your beautiful hands.... Let's hold each other's hand and support each other 
in every life problem myy lovvee.... I REALLYYYY LOVVVEEEEE YOUUUUU MADHUSNIGDHA.... 
Will you be mine forever?🫴🏻🫴🏻🫴🏻🫠🫠🫠
`;

  document.getElementById("apologyMessage").innerText = message;
  document.getElementById("messageModal").style.display = "block";
}

function closeMessage() {
  document.getElementById("messageModal").style.display = "none";
}


// Generate heart-shaped balloons
window.onload = () => {
  const container = document.querySelector(".balloons-container");
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = `${Math.random() * 100}%`;
    b.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
    b.style.animationDuration = `${6 + Math.random() * 6}s`;
    b.style.opacity = Math.random();
    container.appendChild(b);
  }
};

// Surprise Slideshow Logic
let slideIndex = 0;

function showSurprise() {
  document.getElementById("slideshow").style.display = "block";
  const slides = document.querySelectorAll(".slide");

  // Hide all initially
  slides.forEach(slide => slide.classList.remove("active"));

  // Show one
  function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 1500); // Change every 1.5s
  }

  showSlides();

  const audio = new Audio("zaalima.mp3");
  audio.play();
}
