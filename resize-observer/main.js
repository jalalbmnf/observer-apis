const box = document.querySelector(".box");

const resizeObserver = new ResizeObserver((entries) => {
  const boxElement = entries[0];
  const isSmall = boxElement.contentRect.width < 600;
  boxElement.target.style.backgroundColor = isSmall ? "red" : "blue";
});

resizeObserver.observe(box);
