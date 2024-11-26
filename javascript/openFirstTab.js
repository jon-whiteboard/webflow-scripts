// Ensures first tab of each tabs component is open by default.

document.querySelectorAll(".w-tabs").forEach(component => {
  const links = component.querySelectorAll(".w-tab-link");
  const panes = component.querySelectorAll(".w-tab-pane");

  links.forEach(link => link.classList.remove("w--current"));
  panes.forEach(pane => pane.classList.remove("w--tab-active"));

  if (links.length > 0) links[0].classList.add("w--current");
  if (panes.length > 0) panes[0].classList.add("w--tab-active");
});
