// Shared DOM helpers for the investigation interface.
// NOTE: This file is not currently loaded by index.html.
// The main logic lives in ../script.js which is loaded directly.
export const getElement = (id) => document.getElementById(id);

export const getElements = (ids) => Object.fromEntries(
  ids.map((id) => [id, getElement(id)])
);

export function setHidden(element, hidden) {
  if (element) element.hidden = hidden;
}
