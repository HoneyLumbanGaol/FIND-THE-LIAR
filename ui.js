// Shared DOM helpers for the investigation interface.
export const getElement = (id) => document.getElementById(id);

export const getElements = (ids) => Object.fromEntries(
  ids.map((id) => [id, getElement(id)])
);

export function setHidden(element, hidden) {
  if (element) element.hidden = hidden;
}
