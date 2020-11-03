document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const extraScript = document.createElement("script");
extraScript.src = "http://localhost:8080/src/extra.js";
document.body.appendChild(extraScript);

extraScript.onload = () => {
  window.kakamaki();
};
