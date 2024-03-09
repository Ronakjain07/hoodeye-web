var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "Animation1.json",
});
var animation2 = bodymovin.loadAnimation({
  container: document.getElementById("contact"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "contact.json",
});
