document.addEventListener("deviceready", () => {
    const container = document.querySelector(".container");

    const title = document.createElement("p");

    title.classList.add("title");
    title.innerText = "CxSMS";

    container.appendChild(title);
});
