const parent = document.querySelector(".parent");

const mutationObserver = new MutationObserver((entries) => {
  console.log(entries, "sss");
});

// TYPE - CHILDLIST
mutationObserver.observe(parent, { childList: true });
mutationObserver.observe(parent.children[0], { childList: true });
mutationObserver.disconnect();

parent.children[0].remove();
setTimeout(() => {
  parent.appendChild(document.createElement("div"));
}, 1000);

// TYPE ATTRIBUTES

mutationObserver.observe(parent, {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["id"],
});
parent.id = "New id";

// TYPE CHARACTERDATA

mutationObserver.observe(parent.children[0].childNodes[0], {
  // Have to edit child content for see the changes in the console
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
});
