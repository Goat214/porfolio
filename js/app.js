import data from "./data.js";
const time = document.querySelector("#time");
const template = document.querySelector("template");
const portfolio__list = document.querySelector(".portfolio__list");
time.textContent = new Date().getFullYear();
console.log(data.length);
data.forEach((d, i) => {
  const clone = template.content.cloneNode(true);

  const portfolio__counter = clone.querySelector(".portfolio__counter");
  const portfolio__title = clone.querySelector(".portfolio__title");
  const linkGithub = clone.querySelector(".link-github");
  const linkVercel = clone.querySelector(".link-vercel");

  portfolio__counter.textContent = data.length - i;
  portfolio__title.textContent = d.title;
  linkGithub.href = d.github;
  linkVercel.href = d.vercel;

  portfolio__list.append(clone);
});
