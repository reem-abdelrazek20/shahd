const images = [
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
  "/img/img5.jpeg"
];

let index = 0;

function changeImage() {
  index++;
  if(index >= images.length) index = 0;

  const img = document.getElementById("aboutImage");
  
  // fade animation
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 500);
}

// كل 3 ثواني تتغير الصورة تلقائياً
setInterval(changeImage, 3000);


const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // update active button style
    filterButtons.forEach(b => {
      b.classList.remove("bg-[#C7937A]", "text-white");
      b.classList.add("bg-gray-200", "text-gray-700");
    });
    btn.classList.add("bg-[#C7937A]", "text-white");
    btn.classList.remove("bg-gray-200", "text-gray-700");

    const filter = btn.dataset.filter;

    items.forEach(item => {
      if(filter === "all") {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
        if(item.classList.contains(filter)) {
          item.classList.remove("hidden");
        }
      }
    });

  });
});