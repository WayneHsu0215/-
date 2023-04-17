import { c as create_ssr_component, d as compute_rest_props, s as setContext, f as spread, h as escape_object, i as escape_attribute_value, j as add_attribute, k as is_void, n as noop, v as validate_component, g as getContext, b as subscribe, l as get_current_component, o as globals, p as compute_slots, e as escape, m as missing_component, q as onDestroy, r as createEventDispatcher$1 } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import classNames from "classnames";
import { createPopper } from "@popperjs/core";
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options"
  ]);
  setContext("background", true);
  let { tag = "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = void 0 } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800",
    red: "border-red-300 dark:border-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800",
    green: "border-green-300 dark:border-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800",
    purple: "border-purple-300 dark:border-purple-800",
    pink: "border-pink-300 dark:border-pink-800",
    blue: "border-blue-300 dark:border-blue-800",
    light: "border-gray-500",
    dark: "border-gray-500",
    default: "border-gray-200 dark:border-gray-700",
    dropdown: "border-gray-100 dark:border-gray-700",
    navbar: "border-gray-100 dark:border-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700",
    form: "border-gray-300 dark:border-gray-700",
    primary: "border-primary-500 dark:bg-primary-200 ",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  {
    setContext("color", color);
  }
  divClass = classNames(bgColors[color], textColors[color], rounded && (color === "dropdown" ? "rounded" : "rounded-lg"), border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${transition ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`}`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClasses = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClasses = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClasses,
    inactiveClasses,
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass = classNames(defaultClass, "divide-y divide-gray-200 dark:divide-gray-700", "border-gray-200 dark:border-gray-700", "rounded-t-xl", $$props.class);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      class: frameClass,
      color: "none",
      border: !flush
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803Z" fill="${color}"/> `;
  let { ariaLabel = "chevron down" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const ChevronUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 7.71967C11.7626 7.42678 12.2374 7.42678 12.5303 7.71967L20.0303 15.2197C20.3232 15.5126 20.3232 15.9874 20.0303 16.2803C19.7374 16.5732 19.2626 16.5732 18.9697 16.2803L12 9.31066L5.03033 16.2803C4.73744 16.5732 4.26256 16.5732 3.96967 16.2803C3.67678 15.9874 3.67678 15.5126 3.96967 15.2197L11.4697 7.71967Z" fill="${color}"/> `;
  let { ariaLabel = "chevron up" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selected;
  let { open = false } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  buttonClass = classNames(
    defaultClass,
    ctx.flush ? "py-5" : "p-5",
    open && (ctx.flush ? "text-gray-900 dark:text-white" : activeClasses || ctx.activeClasses),
    !open && (ctx.flush ? "text-gray-500 dark:text-gray-400" : inactiveClasses || ctx.inactiveClasses),
    $$props.class
  );
  $$unsubscribe_selected();
  return `<h2 class="group"><button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``}
    ${open ? `${slots.arrowup ? slots.arrowup({}) : `${validate_component(ChevronUp, "ChevronUp").$$render($$result, {}, {}, {})}`}` : `${slots.arrowdown ? slots.arrowdown({}) : `${validate_component(ChevronDown, "ChevronDown").$$render($$result, {}, {}, {})}`}`}</button></h2>
${open ? `<div><div${add_attribute("class", ctx.flush ? "py-5" : "p-5", 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "gradient", "size", "href", "btnClass", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { gradient = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { btnClass = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "blue" } = $$props;
  let { shadow = null } = $$props;
  const colorClasses = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    alternative: "text-gray-900 bg-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 hover:text-blue-700 focus:text-blue-700 dark:focus:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  };
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
    green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
    cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
    teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ",
    lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
    red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ",
    pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
    purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
  };
  const outlineClasses = {
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  function rounded(gradientOutline = false) {
    if (group) {
      return pill ? "first:rounded-l-full last:rounded-r-full" : gradientOutline ? "first:rounded-l-md last:rounded-r-md" : "first:rounded-l-lg last:rounded-r-lg";
    }
    return pill ? "rounded-full" : gradientOutline ? "rounded-md" : "rounded-lg";
  }
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  let gradientOutlineClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = btnClass ? btnClass : classNames(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    outline && gradient ? "p-0.5" : "inline-flex items-center justify-center " + sizeClasses[size],
    gradient ? gradientClasses[color] : outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    hasBorder() && group && "border-l-0 first:border-l",
    rounded(false),
    shadow && coloredShadowClasses[shadow],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  gradientOutlineClass = classNames("inline-flex items-center justify-center", sizeClasses[size], rounded(true), "bg-white text-gray-900 dark:bg-gray-900 dark:text-white", "transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit");
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${outline && gradient ? `
    <span${add_attribute("class", gradientOutlineClass, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${slots.default ? slots.default({}) : ``}`}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`;
});
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const { Object: Object_1 } = globals;
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let triggerEl;
  let contentEl;
  let popper;
  function init(node, _triggerEl) {
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference, popper: popper2 }) => {
              return [
                yOnly ? popper2.width / 2 - reference.width / 2 - reference.x : 0,
                offset
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open },
        { name: "flip", enabled: false }
      ]
    });
    return {
      update(_triggerEl2) {
        popper.state.elements.reference = _triggerEl2;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  {
    dispatch("show", triggerEl, open);
  }
  popper && popper.setOptions({ placement });
  return `${`<div${add_attribute("this", contentEl, 0)}></div>`}

${open && triggerEl ? `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object_1.assign({}, { use: init }, { options: triggerEl }, { role: "tooltip" }, { tabIndex: activeContent ? -1 : void 0 }, $$restProps, {
      class: classNames("z-10 outline-none", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}
    ${arrow ? `<div data-popper-arrow class="tooltip-arrow"></div>` : ``}`;
      }
    }
  )}` : ``}`;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "frameClass"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { frameClass = "" } = $$props;
  let popoverClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.frameClass === void 0 && $$bindings.frameClass && frameClass !== void 0)
    $$bindings.frameClass(frameClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    popoverClass = classNames("divide-y divide-gray-100 dark:divide-gray-600", frameClass);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: popoverClass }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div class="py-1 overflow-hidden rounded-t">${slots.header ? slots.header({}) : ``}</div>` : ``}
  <ul${add_attribute("class", $$props.class ?? "py-1 w-44", 0)}>${slots.default ? slots.default({}) : ``}</ul>
  ${$$slots.footer ? `<div class="py-1 overflow-hidden rounded-b">${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let liClass;
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  liClass = classNames(defaultClass, href ? "block" : "w-full text-left", $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["customClass", "footerType"]);
  let { customClass = "" } = $$props;
  let { footerType = "default" } = $$props;
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0)
    $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(
          {
            "bg-gray-800": footerType === "sitemap",
            "p-4 bg-white sm:p-6 dark:bg-gray-800": footerType === "socialmedia",
            "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800": footerType === "logo",
            "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800": footerType === "default",
            [`${customClass}`]: footerType === "custom"
          },
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer>`;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = new Date().getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0)
    $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0)
    $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", classNames(spanClass, $$props.class), 0)}>© ${escape(year)}
  ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aClass) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ml-1">${escape(by)}</span>`}
  ${escape(copyrightMessage)}</span>`;
});
const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["liClass", "aClass", "href", "target"]);
  let { liClass = "mr-4 last:mr-0 md:mr-6" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { href = "" } = $$props;
  let { target = void 0 } = $$props;
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<li${add_attribute("class", classNames(liClass, $$props.class), 0)}><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aClass) },
      { target: escape_attribute_value(target) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a></li>`;
});
const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ulClass = "text-gray-600 dark:text-gray-400" } = $$props;
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  return `<ul${add_attribute("class", classNames(ulClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ul>`;
});
let n = Date.now();
function generateId() {
  return (++n).toString(36);
}
const SpeedDial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { defaultClass = "fixed right-6 bottom-6" } = $$props;
  let { placement = "top" } = $$props;
  let { pill = true } = $$props;
  let { tooltip = "left" } = $$props;
  let { trigger = "hover" } = $$props;
  let { textOutside = false } = $$props;
  let { id = generateId() } = $$props;
  let { shadow = null } = $$props;
  let { outline = false } = $$props;
  const group = getContext("group");
  let { color = group ? outline ? "dark" : "alternative" : "blue" } = $$props;
  let { gradient = false } = $$props;
  setContext("speed-dial", { pill, tooltip, textOutside });
  let divClass;
  let poperClass;
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.textOutside === void 0 && $$bindings.textOutside && textOutside !== void 0)
    $$bindings.textOutside(textOutside);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  divClass = classNames(defaultClass, "group", $$props.class);
  poperClass = classNames("flex items-center mb-4 gap-2", ["top", "bottom"].includes(placement) && "flex-col");
  return `<div${add_attribute("class", divClass, 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      pill,
      name: "Open actions menu",
      "aria-controls": id,
      "aria-expanded": "false",
      color,
      gradient,
      outline,
      shadow,
      class: "!p-3"
    },
    {},
    {
      default: () => {
        return `${slots.icon ? slots.icon({}) : `
      <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
    `}
    <span class="sr-only">Open actions menu</span>`;
      }
    }
  )}
  ${validate_component(Popper, "Popper").$$render(
    $$result,
    {
      id,
      trigger,
      arrow: false,
      color: "none",
      activeContent: true,
      placement,
      class: poperClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>`;
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style", "defaultClass"]);
  let { style = "dark" } = $$props;
  let { defaultClass = "py-2 px-3 text-sm font-medium" } = $$props;
  const styles = {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: " bg-white text-gray-900 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-0",
    custom: ""
  };
  let toolTipClass;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  {
    {
      if ($$restProps.color)
        style = "custom";
      else
        $$restProps.color = "none";
      toolTipClass = classNames("tooltip", defaultClass, styles[style], $$props.class);
    }
  }
  return `${validate_component(Popper, "Popper").$$render($$result, Object.assign({}, { "data-tooltip": true }, { rounded: true }, { shadow: true }, $$restProps, { class: toolTipClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const SpeedDialButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "tooltip", "pill", "textOutside"]);
  let { name = "" } = $$props;
  let { tooltip } = $$props;
  let { pill = void 0 } = $$props;
  let { textOutside = void 0 } = $$props;
  const context = getContext("speed-dial");
  let btnClass;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.textOutside === void 0 && $$bindings.textOutside && textOutside !== void 0)
    $$bindings.textOutside(textOutside);
  {
    {
      pill = pill ?? context?.pill ?? true;
      tooltip = tooltip ?? context?.tooltip ?? "left";
      textOutside = textOutside ?? context?.textOutside ?? false;
    }
  }
  btnClass = classNames("w-[52px] h-[52px] shadow-sm !p-2", tooltip === "none" && "flex-col", textOutside && "relative", $$props.class);
  return `${validate_component(Button, "Button").$$render($$result, Object.assign({}, { pill }, { outline: true }, { color: "light" }, $$restProps, { class: btnClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}
  ${tooltip !== "none" ? `<span class="sr-only">${escape(name)}</span>` : `${textOutside ? `<span class="block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2">${escape(name)}</span>` : `<span class="block mb-px text-xs font-medium">${escape(name)}</span>`}`}`;
    }
  })}

${tooltip !== "none" ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: tooltip, style: "dark" }, {}, {
    default: () => {
      return `${escape(name)}`;
    }
  })}` : ``}`;
});
const ChevronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.71967 12.5303C7.42678 12.2374 7.42678 11.7626 7.71967 11.4697L15.2197 3.96967C15.5126 3.67678 15.9874 3.67678 16.2803 3.96967C16.5732 4.26256 16.5732 4.73744 16.2803 5.03033L9.31066 12L16.2803 18.9697C16.5732 19.2626 16.5732 19.7374 16.2803 20.0303C15.9874 20.3232 15.5126 20.3232 15.2197 20.0303L7.71967 12.5303Z" fill="${color}"/> `;
  let { ariaLabel = "chevron left" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2803 11.4697C16.5732 11.7626 16.5732 12.2374 16.2803 12.5303L8.78033 20.0303C8.48744 20.3232 8.01256 20.3232 7.71967 20.0303C7.42678 19.7374 7.42678 19.2626 7.71967 18.9697L14.6893 12L7.71967 5.03033C7.42678 4.73744 7.42678 4.26256 7.71967 3.96967C8.01256 3.67678 8.48744 3.67678 8.78033 3.96967L16.2803 11.4697Z" fill="${color}"/> `;
  let { ariaLabel = "chevron right" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const Chevron = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placement = "bottom" } = $$props;
  let { aligned = false } = $$props;
  const icons = {
    top: ChevronUp,
    right: ChevronRight,
    bottom: ChevronDown,
    left: ChevronLeft
  };
  let icon;
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.aligned === void 0 && $$bindings.aligned && aligned !== void 0)
    $$bindings.aligned(aligned);
  icon = icons[placement.split("-")[0]] ?? ChevronDown;
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "flex items-center justify-between",
      show: aligned
    },
    {},
    {
      default: () => {
        return `${placement.split("-")[0] === "left" ? `${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { class: "h-4 w-4 mr-2" }, {}, {})}
    ${slots.default ? slots.default({}) : ``}` : `${slots.default ? slots.default({}) : ``}
    ${validate_component(icon || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 ml-2" }, {}, {})}`}`;
      }
    }
  )}`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `${open ? `<div class="fixed inset-0 flex h-full w-full items-center justify-center">
		<div class="fixed inset-0 h-full w-full bg-black opacity-30"></div>
		<div class="${"z-50 mx-auto mx-8 overflow-y-auto rounded-lg bg-neutral-50 shadow-xl " + escape($$props.class, true)}">${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  ...defaultIconSizeCustomisations,
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  attributes.viewBox = box.left.toString() + " " + box.top.toString() + " " + boxWidth.toString() + " " + boxHeight.toString();
  return {
    attributes,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    resources,
    path: source.path || "/",
    maxURL: source.maxURL || 500,
    rotate: source.rotate || 750,
    timeout: source.timeout || 5e3,
    random: source.random === true,
    index: source.index || 0,
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach((storage2) => {
    const items = storage2.loaderCallbacks;
    if (items) {
      storage2.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage2) {
  if (!storage2.pendingCallbacksFlag) {
    storage2.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage2.pendingCallbacksFlag = false;
      const items = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage2.provider;
      const prefix = storage2.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage2], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
let idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage2) => {
    (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe2(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe: subscribe2,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        config.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {
}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send2 = api.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback)().abort;
}
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage2, value) {
  return setStoredItem(storage2, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage2) {
  return parseInt(getStoredItem(storage2, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage2 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage2, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage2.lastModifiedCached = storage2.lastModifiedCached ? Math.min(storage2.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function updateLastModified(storage2, lastModified) {
  const lastValue = storage2.lastModifiedCached;
  if (lastValue && lastValue >= lastModified) {
    return lastValue === lastModified;
  }
  storage2.lastModifiedCached = lastModified;
  if (lastValue) {
    for (const key in browserStorageConfig) {
      iterateBrowserStorage(key, (item) => {
        const iconSet = item.data;
        return item.provider !== storage2.provider || iconSet.prefix !== storage2.prefix || iconSet.lastModified === lastModified;
      });
    }
  }
  return true;
}
function storeInBrowserStorage(storage2, data) {
  if (!browserStorageStatus) {
    initBrowserStorage();
  }
  function store(key) {
    let func;
    if (!browserStorageConfig[key] || !(func = getBrowserStorage(key))) {
      return;
    }
    const set = browserStorageEmptyItems[key];
    let index;
    if (set.size) {
      set.delete(index = Array.from(set).shift());
    } else {
      index = getBrowserStorageItemsCount(func);
      if (!setBrowserStorageItemsCount(func, index + 1)) {
        return;
      }
    }
    const item = {
      cached: Math.floor(Date.now() / browserStorageHour),
      provider: storage2.provider,
      data
    };
    return setStoredItem(
      func,
      browserCachePrefix + index.toString(),
      JSON.stringify(item)
    );
  }
  if (data.lastModified && !updateLastModified(storage2, data.lastModified)) {
    return;
  }
  if (!Object.keys(data.icons).length) {
    return;
  }
  if (data.not_found) {
    data = Object.assign({}, data);
    delete data.not_found;
  }
  if (!store("local")) {
    store("session");
  }
}
function emptyCallback() {
}
function loadedNewIcons(storage2) {
  if (!storage2.iconsLoaderFlag) {
    storage2.iconsLoaderFlag = true;
    setTimeout(() => {
      storage2.iconsLoaderFlag = false;
      updateCallbacks(storage2);
    });
  }
}
function loadNewIcons(storage2, icons) {
  if (!storage2.iconsToLoad) {
    storage2.iconsToLoad = icons;
  } else {
    storage2.iconsToLoad = storage2.iconsToLoad.concat(icons).sort();
  }
  if (!storage2.iconsQueueFlag) {
    storage2.iconsQueueFlag = true;
    setTimeout(() => {
      storage2.iconsQueueFlag = false;
      const { provider, prefix } = storage2;
      const icons2 = storage2.iconsToLoad;
      delete storage2.iconsToLoad;
      let api;
      if (!icons2 || !(api = getAPIModule(provider))) {
        return;
      }
      const params = api.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data) => {
          if (typeof data !== "object") {
            item.icons.forEach((name) => {
              storage2.missing.add(name);
            });
          } else {
            try {
              const parsed = addIconSet(
                storage2,
                data
              );
              if (!parsed.length) {
                return;
              }
              const pending = storage2.pendingIcons;
              if (pending) {
                parsed.forEach((name) => {
                  pending.delete(name);
                });
              }
              storeInBrowserStorage(storage2, data);
            } catch (err) {
              console.error(err);
            }
          }
          loadedNewIcons(storage2);
        });
      });
    });
  }
}
const loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage2 = getStorage(provider, prefix);
    const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage2) => {
    const { provider, prefix } = storage2;
    if (newIcons[provider][prefix].length) {
      loadNewIcons(storage2, newIcons[provider][prefix]);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  "background-color": "currentColor"
};
const coloredProps = {
  "background-color": "transparent"
};
const propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
const propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(icon, props) {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const mode = props.mode || "svg";
  const componentProps = mode === "svg" ? { ...svgDefaults } : {};
  if (icon.body.indexOf("xlink:") === -1) {
    delete componentProps["xmlns:xlink"];
  }
  let style = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style = style + (style.length > 0 && style.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (key.slice(0, 3) === "on:") {
          break;
        }
        if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style = "vertical-align: -0.125em; " + style;
  }
  if (mode === "svg") {
    Object.assign(componentProps, renderAttribs);
    if (style !== "") {
      componentProps.style = style;
    }
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    return {
      svg: true,
      attributes: componentProps,
      body: replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifySvelte")
    };
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  const url = svgToURL(html);
  const styles = {
    "--svg": url
  };
  const size = (prop) => {
    const value = renderAttribs[prop];
    if (value) {
      styles[prop] = fixSize(value);
    }
  };
  size("width");
  size("height");
  Object.assign(styles, commonProps, useMask ? monotoneProps : coloredProps);
  let customStyle = "";
  for (const key in styles) {
    customStyle += key + ": " + styles[key] + ";";
  }
  componentProps.style = customStyle + style;
  return {
    svg: false,
    attributes: componentProps
  };
}
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (typeof item !== "object" || item === null || item instanceof Array || typeof item.icons !== "object" || typeof item.prefix !== "string" || !addCollection(item)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function checkIconState(icon, state, mounted, callback, onload) {
  function abortLoading() {
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  }
  if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
    state.name = "";
    abortLoading();
    return { data: { ...defaultIconProps, ...icon } };
  }
  let iconName;
  if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
    abortLoading();
    return null;
  }
  const data = getIconData(iconName);
  if (!data) {
    if (mounted && (!state.loading || state.loading.name !== icon)) {
      abortLoading();
      state.name = "";
      state.loading = {
        name: icon,
        abort: loadIcons([iconName], callback)
      };
    }
    return null;
  }
  abortLoading();
  if (state.name !== icon) {
    state.name = icon;
    if (onload && !state.destroyed) {
      onload(icon);
    }
  }
  const classes = ["iconify"];
  if (iconName.prefix !== "") {
    classes.push("iconify--" + iconName.prefix);
  }
  if (iconName.provider !== "") {
    classes.push("iconify--" + iconName.provider);
  }
  return { data, classes };
}
function generateIcon(icon, props) {
  return icon ? render({
    ...defaultIconProps,
    ...icon
  }, props) : null;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    name: "",
    loading: null,
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher$1();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-15xrh0u-appear{from{opacity:0}to{opacity:1}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = Array(3);
  let OpenSvelteKit, OpenTailwindCSS, OpenJavaScript, OpenHTML, OpenJava, OpenCplus, OpenC, OpenPython = false;
  let welcomeText = "";
  let hello = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<head><meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>許朝威個人網站</title></head>

<body><div><div class="w-full"><header class="" id="a0"><nav class="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6"><div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between"><a href="/" class="flex items-center"><img src="src\\routes\\images\\logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
							<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Wayne&#39;s Web</span></a>
						<div class="flex items-center lg:order-2"><button data-collapse-toggle="mobile-menu-2" type="button" class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden" aria-controls="mobile-menu-2" aria-expanded="false">${validate_component(Chevron, "Chevron").$$render(
      $$result,
      {
        type: "button",
        "aria-controls": "mobile-menu-2",
        "aria-expanded": "false"
      },
      {},
      {
        default: () => {
          return `<p class="text-l">Open menu</p>`;
        }
      }
    )}</button>
							${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `<a href="#a0">首頁</a>`;
          }
        })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `關於我`;
          }
        })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `大學生活`;
          }
        })}
								${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `結語`;
          }
        })}`;
      }
    })}</div>
						<div class="navbar hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2"><ul class="mt-4 flex flex-col text-xl font-medium lg:mt-0 lg:flex-row lg:space-x-8"><li><a href="#a0" class="lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"><b>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mdi:people",
        class: "mr-2 inline text-2xl"
      },
      {},
      {}
    )}首頁</b></a></li>
								<li><a href="#a2" class="lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"><b>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mdi:file",
        class: "mr-2 inline text-2xl"
      },
      {},
      {}
    )}關於我</b></a></li>
								<li><a href="#a3" class="lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"><b>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mdi:camera",
        class: "mr-2 inline text-2xl"
      },
      {},
      {}
    )} 大學</b></a></li>
								<li><a href="#4" class="lg:hover:text-primary-700 mr-12 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"><b>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "material-symbols:pending",
        class: "mr-2 inline text-2xl"
      },
      {},
      {}
    )}結語</b></a></li></ul></div></div></nav></header></div>

		
		<section class="" id="a1"><div class="mx-auto mr-4 grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0"><div class="mr-auto place-self-center lg:col-span-7"><h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">${escape(hello)}</h1>
					<p class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"><b>${escape(welcomeText)}</b></p>
					${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `<a href="#a2">Get started
						</a>`;
      }
    })}</div>
				<div class="flex hidden h-full overflow-x-auto lg:col-span-5 lg:mt-0 lg:flex" id="slider">${``}</div></div></section>

		<section class="border border-2 bg-white dark:bg-gray-900" id="a2"><div class="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 "><div class="mb-8 max-w-screen-md lg:mb-8"><h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">關於我 ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mdi:file",
        class: "mr-2 inline text-4xl"
      },
      {},
      {}
    )}</h2></div>
				<div class="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3"><div class="h-56 p-20 rounded-lg bg-gradient-to-r from-sky-100 to-blue-300 pt-12 hover:from-sky-300 hover:to-blue-500 hover:text-white "><h3 class="mb-2 text-xl font-bold dark:text-white">基本資料</h3>
						<p class="">姓名:許朝威 Chao-Wei Hsu</p>
						<p class="">國籍:台灣</p>
						<p class="">生日:2003/02/15</p></div>
					<div class="h-56 p-16 rounded-lg bg-gradient-to-r from-sky-100 to-blue-300 pt-12 hover:from-sky-300 hover:to-blue-500 hover:text-white"><h3 class="mb-2 text-xl font-bold dark:text-white">聯絡方式</h3>

						<p class="">手機:0966-550-373</p>
						<p class="">信箱:asdfg32390299@gmail.com</p></div>
					<div class="h-56 p-16 rounded-lg bg-gradient-to-r from-sky-100 to-blue-300 pt-12 hover:from-sky-300 hover:to-blue-500 hover:text-white"><h3 class="mb-2 text-xl font-bold dark:text-white">學歷</h3>
						<b>國立台北護理健康大學 資訊管理系</b>
						<p class="">2021/09-迄今 學士二年級</p>
						<b>國立土庫商工 資料處理科</b>
						<p class="">2018/09-2021-06 高中</p></div></div>
				

				<div class="mt-8"><h3 class="mb-2 text-xl font-bold dark:text-white">網頁程式語言</h3>
					<nav class="flex "><div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "logos:svelte-icon",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}
								SvelteKit</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "SvelteKit",
        message: "SvelteKit",
        open: OpenSvelteKit
      },
      {
        open: ($$value) => {
          OpenSvelteKit = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">SvelteKit</h3></div>`;
        }
      }
    )}
						<div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "skill-icons:tailwindcss-light",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}TailwindCSS</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "TailwindCSS",
        message: "TailwindCSS",
        open: OpenTailwindCSS
      },
      {
        open: ($$value) => {
          OpenTailwindCSS = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">TailwindCSS</h3></div>`;
        }
      }
    )}
						<div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "skill-icons:javascript",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}JavaScript</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "JavaScript",
        message: "JavaScript",
        open: OpenJavaScript
      },
      {
        open: ($$value) => {
          OpenJavaScript = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">JavaScript</h3></div>`;
        }
      }
    )}

						<div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "skill-icons:html",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}HTML</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "HTML",
        message: "HTML",
        open: OpenHTML
      },
      {
        open: ($$value) => {
          OpenHTML = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">HTML</h3></div>`;
        }
      }
    )}</nav></div>
				<div><h3 class="mb-2 text-xl font-bold dark:text-white">軟體程式語言</h3>
					<nav class="flex "><div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "logos:java",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}Java</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Java",
        message: "Java",
        open: OpenJava
      },
      {
        open: ($$value) => {
          OpenJava = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">Java</h3></div>`;
        }
      }
    )}
						<div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "logos:c",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}
								C</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      { title: "C", message: "C", open: OpenC },
      {
        open: ($$value) => {
          OpenC = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">C</h3></div>`;
        }
      }
    )}
						<div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "logos:c-plusplus",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}C++</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "C++",
        message: "C++",
        open: OpenCplus
      },
      {
        open: ($$value) => {
          OpenCplus = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">C</h3></div>`;
        }
      }
    )}
						<div class="item-center m-4 w-1/2 text-center"><button class="rounded-lg border border-4 p-2 hover:bg-gray-100">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "logos:python",
        class: "mr-2 inline text-xl"
      },
      {},
      {}
    )}Python</button></div>
						${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Python",
        message: "Python",
        open: OpenPython
      },
      {
        open: ($$value) => {
          OpenPython = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-60 w-60 rounded-lg p-6 "><h3 class="mb-2 text-xl font-bold dark:text-white">Python</h3></div>`;
        }
      }
    )}</nav></div></div></section>

		<section class="border border-2 bg-white dark:bg-gray-900" id="a3"><div class="p-12"><h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">大學 ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mdi:camera",
        class: "mr-2 inline text-4xl"
      },
      {},
      {}
    )}
					<img class="float-right rounded-lg" src="src\\routes\\images\\logo.jpg" alt="mockup" width="160" height="160"></h2>
				
				<nav class="p-4">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Open all`;
      }
    })}
					${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Close all`;
      }
    })}</nav>

				${validate_component(Accordion, "Accordion").$$render($$result, { multiple: true, class: "mt-10" }, {}, {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[0] },
          {
            open: ($$value) => {
              items[0] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<span slot="header"><b>認識了很多朋友</b></span>`;
            },
            default: () => {
              return `<nav><p class="mb-2 text-gray-500 dark:text-gray-400">我在上大學後，認識了許多的人，跟他們到處玩、到處吃喝成為了我不斷向前的動力。
							</p>

							${``}</nav>`;
            }
          }
        )}
					${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[1] },
          {
            open: ($$value) => {
              items[1] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<div slot="header"><b>主題二</b></div>`;
            },
            default: () => {
              return `<p class="mb-2 text-gray-500 dark:text-gray-400">...</p>
						<p class="mb-2 text-gray-500 dark:text-gray-400">...</p>
						<p class="mb-2 text-gray-500 dark:text-gray-400">...</p>`;
            }
          }
        )}
					${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[2] },
          {
            open: ($$value) => {
              items[2] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<div slot="header"><b>主題三</b></div>`;
            },
            default: () => {
              return `<p>...</p>`;
            }
          }
        )}
					${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[3] },
          {
            open: ($$value) => {
              items[3] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<div slot="header"><b>主題四</b></div>`;
            },
            default: () => {
              return `<p>...</p>`;
            }
          }
        )}
					${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          { open: items[4] },
          {
            open: ($$value) => {
              items[4] = $$value;
              $$settled = false;
            }
          },
          {
            header: () => {
              return `<div slot="header"><b>主題五</b></div>`;
            },
            default: () => {
              return `<p>...</p>`;
            }
          }
        )}`;
      }
    })}</div></section></div>
	${validate_component(SpeedDial, "SpeedDial").$$render(
      $$result,
      {
        defaultClass: "mr-10 absolute text-right bottom-6 sticky  "
      },
      {},
      {
        default: () => {
          return `${validate_component(SpeedDialButton, "SpeedDialButton").$$render($$result, { name: "首頁" }, {}, {
            default: () => {
              return `<a href="#a0" class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: "mdi:people",
                  class: " inline text-2xl"
                },
                {},
                {}
              )}</a>`;
            }
          })}
		${validate_component(SpeedDialButton, "SpeedDialButton").$$render($$result, { name: "關於" }, {}, {
            default: () => {
              return `<a href="#a2" class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: "mdi:file",
                  class: "inline text-2xl"
                },
                {},
                {}
              )}</a>`;
            }
          })}
		${validate_component(SpeedDialButton, "SpeedDialButton").$$render($$result, { name: "大學" }, {}, {
            default: () => {
              return `<a href="#a3" class="lg:hover:text-primary-700 lock border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: "mdi:camera",
                  class: " inline text-2xl"
                },
                {},
                {}
              )}</a>`;
            }
          })}
		${validate_component(SpeedDialButton, "SpeedDialButton").$$render($$result, { name: "結語" }, {}, {
            default: () => {
              return `<a href="#a4" class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: "material-symbols:pending",
                  class: " inline text-2xl"
                },
                {},
                {}
              )}</a>`;
            }
          })}`;
        }
      }
    )}</body>

<div>${validate_component(Footer, "Footer").$$render($$result, { footerType: "logo" }, {}, {
      default: () => {
        return `<div class="sm:flex sm:items-center sm:justify-between"><div class="flex items-center text-center"><img src="src\\routes\\images\\logo.png" witch="60" height="60" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
				<p class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Wayne&#39;s Web
				</p></div>
			${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render(
          $$result,
          {
            ulClass: "flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
          },
          {},
          {
            default: () => {
              return `${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "https://github.com/WayneHsu0215" }, {}, {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render(
                    $$result,
                    {
                      icon: "icon-park:github",
                      class: "mr-2 inline text-xl"
                    },
                    {},
                    {}
                  )}Github`;
                }
              })}
				${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "/" }, {}, {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render(
                    $$result,
                    {
                      icon: "mdi:instagram",
                      class: "mr-2 inline text-xl"
                    },
                    {},
                    {}
                  )}Instagram`;
                }
              })}
				${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "/" }, {}, {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render(
                    $$result,
                    {
                      icon: "ic:baseline-facebook",
                      class: "mr-2 inline text-xl"
                    },
                    {},
                    {}
                  )}Facebook`;
                }
              })}`;
            }
          }
        )}
			${validate_component(FooterCopyright, "FooterCopyright").$$render($$result, { href: "/", by: "Wayne" }, {}, {})}</div>`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
