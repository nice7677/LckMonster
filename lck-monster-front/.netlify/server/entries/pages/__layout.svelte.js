var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_2dc61825 = __toModule(require("../../chunks/index-2dc61825.js"));
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');header.svelte-wgcrsp{background:rgb(29, 30, 32);color:white;height:4.5em;line-height:4.5em;border-bottom-color:rgb(35, 45, 31)}.title.svelte-wgcrsp{font-family:'Orbitron', sans-serif;font-size:2em;text-align:center}",
  map: null
};
const Header = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"}" data-svelte="svelte-18apbm6"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"}" data-svelte="svelte-18apbm6"><script src="${"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"}" integrity="${"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"}" crossorigin="${"anonymous"}" data-svelte="svelte-18apbm6"><\/script><script src="${"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"}" integrity="${"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"}" crossorigin="${"anonymous"}" data-svelte="svelte-18apbm6"><\/script><script src="${"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"}" integrity="${"sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"}" crossorigin="${"anonymous"}" data-svelte="svelte-18apbm6"><\/script>`, ""}

<title>LCK.MONSTER - LOL League Statistics
</title>
<header class="${"fixed-top svelte-wgcrsp"}"><div class="${"container"}"><div class="${"row"}"><div class="${"col-"}"><div class="${"title svelte-wgcrsp"}">LCK.MONSTER
                </div></div></div></div>
</header>`;
});
var Search_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn.svelte-zammv6{outline:0px !important;-webkit-appearance:none;box-shadow:none !important}.nav-link.svelte-zammv6{text-align:center;width:4em;color:white;font-size:1em}",
  map: null
};
const Search = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `
<div class="${"container"}" style="${"margin-top: 9em; color: white;"}"><div class="${"row"}"><div class="${"col-"}"><div class="${"row"}"><form class="${"row d-flex justify-content-center"}"><div class="${"col-auto"}"><input type="${"text"}" class="${"form-control"}" placeholder="${"\uC120\uC218 \uB610\uB294 \uD300\uBA85 \uC785\uB825"}" style="${"width: 25em;"}"></div>
                    <div class="${"col-auto"}"><button type="${"submit"}" class="${"btn btn-primary mb-3 svelte-zammv6"}" style="${"padding: 0; background: Transparent; border: none !important; outline: none !important;;"}"><i class="${"fab fa-searchengin"}" style="${"font-size: 2em;"}"></i></button></div></form></div>
            <div class="${"row"}" style="${"height: 40px;"}"><div class="${"col"}"></div>
                <div class="${"col"}"><ul class="${"nav justify-content-center"}"><li class="${"nav-item"}"><a class="${"nav-link svelte-zammv6"}" aria-current="${"page"}" href="${"#"}">\uC120\uC218</a></li>
                        <li class="${"nav-item"}"><a class="${"nav-link svelte-zammv6"}" href="${"#"}">\uD300</a></li>
                        <li class="${"nav-item"}"><a class="${"nav-link svelte-zammv6"}" href="${"#"}">\uB9AC\uADF8</a></li></ul></div>
                <div class="${"col"}" style="${"height: 40px; line-height: 40px;"}"><div class="${""}" style="${"font-size: 12px;"}">\uC624\uB298\uC758 \uC608\uC815 \uACBD\uAE30 / 17:00
                        \uC820\uC9C0 vs kt \uB864\uC2A4\uD130 / 20:00 \uB18D\uC2EC \uB808\uB4DC\uD3EC\uC2A4 vs DRX
                    </div></div></div></div></div>
</div>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-2nphoz.svelte-2nphoz{flex:1;display:flex;flex-direction:column;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box;margin-top:3.5em}footer.svelte-2nphoz.svelte-2nphoz{color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:5em}footer.svelte-2nphoz a.svelte-2nphoz{color:white;font-weight:bold}@media(min-width: 480px){footer.svelte-2nphoz.svelte-2nphoz{padding:5em 0}}.lck-monster.svelte-2nphoz.svelte-2nphoz{font-family:'Orbitron', sans-serif;font-weight:bolder}",
  map: null
};
const _layout = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_2dc61825.v)(Header, "Header").$$render($$result, {}, {}, {})}

${(0, import_index_2dc61825.v)(Search, "Search").$$render($$result, {}, {}, {})}

<main class="${"svelte-2nphoz"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-2nphoz"}"><p>\uB864 \uB9AC\uADF8 \uC9C0\uD45C\uB294 \uBCF4\uB294 \uACF3 <strong class="${"lck-monster svelte-2nphoz"}"><a href="${"https://www.lck.monster"}" class="${"svelte-2nphoz"}">LCK.MONSTER</a></strong></p>
</footer>`;
});
