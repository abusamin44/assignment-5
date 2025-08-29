// heart icon counter functionality
const heartIcons = document.querySelectorAll(".heart-icon");
let heartCount = parseInt(document.getElementById("heart-count").innerText);

heartIcons.forEach((heart) => {
  heart.addEventListener("click", () => {
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
});

// coin icon counter functionality
let coinCount = parseInt(document.getElementById("coin-count").innerText);
const hotlineNumber = document.getElementsByClassName("number");
const callBtn = document.getElementsByClassName("calling-btn"); // fixed
const title = document.getElementsByClassName("service-title"); // fixed
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById('copy-btn')




for (let i = 0; i < callBtn.length; i++) {
  const btn = callBtn[i];
  const serviceName = title[i].innerText;
  const numbers = hotlineNumber[i].innerText;

  btn.addEventListener("click", function () {
    if (coinCount < 20) {
      alert(
        "❌ You don't have enough coins to make a call. Please recharge your coins."
      );
      return;
    }

    alert(`📞Calling ${serviceName} at ${numbers}`);
    coinCount -= 20;
    document.getElementById("coin-count").innerText = coinCount;

    for (let i = 0; i < copyBtn.length; i++) {
      copyBtn[i].addEventListener('click', function () {
        alert("Copy button clicked!");
      });
    }

    // call history functionality
    const callTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
    });

    

    const parentCardContent = document.getElementById("parent-card");
    const cardContent = document.createElement("div");
    cardContent.classList =
      "w-full sm:max-w-md mx-auto mt-2 bg-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm";
    cardContent.innerHTML = `
        <div>
            <h2 class='font-semibold text-[18px]'>${serviceName}</h2>
            <p class='text-gray-700 text-sm font-semibold'>${numbers}</p>
        </div>
        <span class='text-gray-600 text-base'>${callTime}</span>
    `;

    parentCardContent.appendChild(cardContent);

  });
}

// clear functionality
clearBtn.addEventListener("click", function () {
  const parentCardContent = document.getElementById("parent-card");
  parentCardContent.innerHTML = "";
});


