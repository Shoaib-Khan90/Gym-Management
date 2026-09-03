import { a as require_react, o as __toESM, t as require_jsx_runtime } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-C4F7bz1g.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Activity = createLucideIcon("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Apple = createLucideIcon("apple", [["path", {
	d: "M12 6.528V3a1 1 0 0 1 1-1h0",
	key: "11qiee"
}], ["path", {
	d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",
	key: "110c12"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bell = createLucideIcon("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarCheck = createLucideIcon("calendar-check", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "m9 15 2 2 4-4",
		key: "1grp1n"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleDollarSign = createLucideIcon("circle-dollar-sign", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
		key: "1h4pet"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ClipboardList = createLucideIcon("clipboard-list", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M12 11h4",
		key: "1jrz19"
	}],
	["path", {
		d: "M12 16h4",
		key: "n85exb"
	}],
	["path", {
		d: "M8 11h.01",
		key: "1dfujw"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Dumbbell = createLucideIcon("dumbbell", [
	["path", {
		d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",
		key: "9m4mmf"
	}],
	["path", {
		d: "m2.5 21.5 1.4-1.4",
		key: "17g3f0"
	}],
	["path", {
		d: "m20.1 3.9 1.4-1.4",
		key: "1qn309"
	}],
	["path", {
		d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",
		key: "1t2c92"
	}],
	["path", {
		d: "m9.6 14.4 4.8-4.8",
		key: "6umqxw"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PenLine = createLucideIcon("pen-line", [["path", {
	d: "M13 21h8",
	key: "1jsn5i"
}], ["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Flame = createLucideIcon("flame", [["path", {
	d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
	key: "1slcih"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LayoutDashboard = createLucideIcon("layout-dashboard", [
	["rect", {
		width: "7",
		height: "9",
		x: "3",
		y: "3",
		rx: "1",
		key: "10lvy0"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "14",
		y: "3",
		rx: "1",
		key: "16une8"
	}],
	["rect", {
		width: "7",
		height: "9",
		x: "14",
		y: "12",
		rx: "1",
		key: "1hutg5"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "ldoo1y"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Moon = createLucideIcon("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Phone = createLucideIcon("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sun = createLucideIcon("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingUp = createLucideIcon("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserCheck = createLucideIcon("user-check", [
	["path", {
		d: "m16 11 2 2 4-4",
		key: "9rsbq5"
	}],
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var WalletCards = createLucideIcon("wallet-cards", [
	["path", {
		d: "M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21",
		key: "1vwh6y"
	}],
	["path", {
		d: "M3 7h18",
		key: "1uiuf2"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
var import_jsx_runtime = require_jsx_runtime();
var seedMembers = [
	{
		id: 1,
		name: "Ali Raza",
		email: "ali@gmail.com",
		phone: "0301 2345678",
		age: 25,
		gender: "Male",
		plan: "Premium",
		joined: "2026-08-12",
		status: "Active"
	},
	{
		id: 2,
		name: "Sara Khan",
		email: "sara@gmail.com",
		phone: "0321 8765432",
		age: 23,
		gender: "Female",
		plan: "Standard",
		joined: "2026-07-28",
		status: "Active"
	},
	{
		id: 3,
		name: "Hamza Ahmed",
		email: "hamza@gmail.com",
		phone: "0333 4455667",
		age: 29,
		gender: "Male",
		plan: "Basic",
		joined: "2026-06-14",
		status: "Expired"
	},
	{
		id: 4,
		name: "Ayesha Noor",
		email: "ayesha@gmail.com",
		phone: "0300 9876543",
		age: 27,
		gender: "Female",
		plan: "Premium",
		joined: "2026-08-30",
		status: "Active"
	}
];
var seedTrainers = [
	{
		id: 11,
		name: "Ahmed Raza",
		specialty: "Strength & Conditioning",
		experience: "7 years",
		phone: "0300 1112233",
		assigned: 18,
		status: "Available"
	},
	{
		id: 12,
		name: "Zara Malik",
		specialty: "Yoga & Mobility",
		experience: "5 years",
		phone: "0321 5566778",
		assigned: 14,
		status: "Available"
	},
	{
		id: 13,
		name: "Usman Tariq",
		specialty: "Bodybuilding",
		experience: "9 years",
		phone: "0333 9988776",
		assigned: 21,
		status: "Available"
	}
];
var seedPlans = [
	{
		id: 21,
		name: "Basic",
		duration: "1 Month",
		price: 3e3,
		features: "Gym floor, Locker access",
		status: "Active"
	},
	{
		id: 22,
		name: "Standard",
		duration: "3 Months",
		price: 8e3,
		features: "Gym floor, Group classes, Diet guide",
		status: "Active"
	},
	{
		id: 23,
		name: "Premium",
		duration: "6 Months",
		price: 15e3,
		features: "All access, Personal trainer, Custom plans",
		status: "Active"
	}
];
var seedWorkouts = [
	{
		id: 31,
		name: "Lean Muscle Builder",
		member: "Ali Raza",
		type: "Workout",
		schedule: "5 days/week"
	},
	{
		id: 32,
		name: "Fat Loss Starter",
		member: "Sara Khan",
		type: "Workout",
		schedule: "4 days/week"
	},
	{
		id: 33,
		name: "High Protein Plan",
		member: "Ayesha Noor",
		type: "Diet",
		schedule: "Daily"
	}
];
var read = (k, f) => {
	if (typeof window === "undefined") return f;
	try {
		return JSON.parse(localStorage.getItem(k) || "") || f;
	} catch {
		return f;
	}
};
function App() {
	const [view, setView] = (0, import_react.useState)("landing");
	const [tab, setTab] = (0, import_react.useState)("Overview");
	const [dark, setDark] = (0, import_react.useState)(false);
	const [members, setMembers] = (0, import_react.useState)(() => read("gym-members", seedMembers));
	const [trainers, setTrainers] = (0, import_react.useState)(() => read("gym-trainers", seedTrainers));
	const [plans, setPlans] = (0, import_react.useState)(() => read("gym-plans", seedPlans));
	const [workouts, setWorkouts] = (0, import_react.useState)(() => read("gym-workouts", seedWorkouts));
	(0, import_react.useEffect)(() => {
		localStorage.setItem("gym-members", JSON.stringify(members));
		localStorage.setItem("gym-trainers", JSON.stringify(trainers));
		localStorage.setItem("gym-plans", JSON.stringify(plans));
		localStorage.setItem("gym-workouts", JSON.stringify(workouts));
	}, [
		members,
		trainers,
		plans,
		workouts
	]);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	if (view === "landing") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, { login: () => setView("login") });
	if (view === "login" || view === "forgot") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Auth, {
		forgot: view === "forgot",
		back: () => setView("landing"),
		done: () => setView(view === "forgot" ? "login" : "dashboard"),
		switcher: () => setView(view === "login" ? "forgot" : "login")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {
		tab,
		setTab,
		dark,
		setDark,
		logout: () => {
			setView("landing");
			setTab("Overview");
		},
		data: {
			members,
			trainers,
			plans,
			workouts
		},
		setters: {
			setMembers,
			setTrainers,
			setPlans,
			setWorkouts
		}
	});
}
function Landing({ login }) {
	const [menu, setMenu] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "landing",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "public-nav",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {}),
						"IRON",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CORE" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: menu ? "open" : "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#plans",
								children: "Memberships"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#trainers",
								children: "Trainers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: login,
							children: "Admin Login"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "lime",
							href: "#plans",
							children: "Join now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "hamb",
							onClick: () => setMenu(!menu),
							children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STRONGER EVERY DAY" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							"Build strength.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Build ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "yourself." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Expert coaching, premium equipment and a community that keeps you moving forward." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "lime",
								href: "#plans",
								children: ["Explore memberships ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "outline",
								onClick: login,
								children: "Member login"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["1,200+", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Active members" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["24/7", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Gym access" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["12+", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Expert trainers" })] })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "about",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "ABOUT IRONCORE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Training built around your goals." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "IronCore combines serious equipment, expert coaching and a welcoming community. Whether you are starting your first workout or chasing your next personal best, we give you the tools and support to succeed." }),
						[
							"Certified personal trainers",
							"Modern strength and cardio equipment",
							"Customized workout and diet plans",
							"Clean, secure 24/7 facility"
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), x] }, x))
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "services",
					className: "section black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						kicker: "WHAT WE OFFER",
						title: "Everything you need to progress"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "service-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, {}),
								title: "Strength training",
								text: "Premium free weights and machines for every training level."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {}),
								title: "Cardio & conditioning",
								text: "High-energy programs that improve endurance and performance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {}),
								title: "Personal coaching",
								text: "One-on-one guidance tailored to your goals."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, {}),
								title: "Nutrition plans",
								text: "Practical meal guidance that supports your training."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "plans",
					className: "section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						kicker: "MEMBERSHIPS",
						title: "Choose your level"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "price-grid",
						children: seedPlans.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: i === 1 ? "featured" : "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["Rs. ", Number(p.price).toLocaleString()] }),
									" / ",
									p.duration
								] }),
								String(p.features).split(", ").map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), x] }, x)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: login,
									children: "Get started"
								})
							]
						}, p.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "trainers",
					className: "section trainers",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						kicker: "THE COACHES",
						title: "Train with the best"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "coach-grid",
						children: seedTrainers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `coach c${i}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.specialty }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [t.experience, " experience"] })
						] }, t.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "contact",
					className: "contact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "READY TO START?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Your strongest chapter begins today." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), " +92 300 1234567"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), " hello@ironcore.pk"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gulshan-e-Iqbal, Karachi" })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							alert("Message sent!");
							e.currentTarget.reset();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								placeholder: "Full name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								placeholder: "Email address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								placeholder: "How can we help?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { children: ["Send message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})] })
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "landing-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {}),
					" IRON",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CORE" })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 IronCore Fitness. Karachi, Pakistan." })]
			})
		]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
		className: "kicker",
		children
	});
}
function Heading({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: kicker }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title })]
	});
}
function Card({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: icon }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
	] });
}
function Auth({ forgot, back, done, switcher }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "auth",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "auth-brand",
			onClick: back,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {}),
				"IRON",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CORE" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				forgot ? alert("Reset link sent") : done();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "ADMIN PORTAL" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: forgot ? "Reset password" : "Welcome back" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: forgot ? "Enter your email to receive instructions." : "Sign in to manage your gym operations." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					defaultValue: forgot ? "" : "admin@ironcore.pk"
				})] }),
				!forgot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "password",
					defaultValue: "admin123"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "lime",
					children: [forgot ? "Send reset link" : "Login to dashboard", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-button",
					onClick: switcher,
					children: forgot ? "Back to login" : "Forgot password?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Demo: admin@ironcore.pk / admin123" })
			]
		})]
	});
}
var nav = [
	["Overview", LayoutDashboard],
	["Members", Users],
	["Trainers", UserCheck],
	["Memberships", WalletCards],
	["Attendance", CalendarCheck],
	["Workout & Diet", ClipboardList],
	["Payments", CircleDollarSign],
	["Profile", User],
	["Settings", Settings]
];
function Dashboard({ tab, setTab, dark, setDark, logout, data, setters }) {
	const [side, setSide] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: side ? "sidebar show" : "sidebar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {}),
					"IRON",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CORE" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "GYM MANAGEMENT" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: nav.map(([n, I]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: tab === n ? "active" : "",
					onClick: () => {
						setTab(n);
						setSide(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {}), n]
				}, n)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "logout",
					onClick: logout,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), "Logout"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "dash",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "side-btn",
						onClick: () => setSide(!side),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { placeholder: "Search anything..." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setDark(!dark),
						children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "user",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "SK" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Shoaib Khan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Administrator" })] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "content",
				children: [
					tab === "Overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, { data }),
					" ",
					tab === "Members" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crud, {
						title: "Members",
						subtitle: "Manage registered gym members",
						rows: data.members,
						setRows: setters.setMembers,
						kind: "member"
					}),
					tab === "Trainers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crud, {
						title: "Trainers",
						subtitle: "Manage your coaching team",
						rows: data.trainers,
						setRows: setters.setTrainers,
						kind: "trainer"
					}),
					tab === "Memberships" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plans, {
						rows: data.plans,
						setRows: setters.setPlans
					}),
					" ",
					tab === "Attendance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Attendance, { members: data.members }),
					" ",
					tab === "Workout & Diet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crud, {
						title: "Workout & diet plans",
						subtitle: "Create plans and assign them to members",
						rows: data.workouts,
						setRows: setters.setWorkouts,
						kind: "workout"
					}),
					tab === "Payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Payments, { members: data.members }),
					" ",
					tab === "Profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profile, {}),
					tab === "Settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, {
						dark,
						setDark
					})
				]
			})]
		})]
	});
}
function Title({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: subtitle })] }), action]
	});
}
function Overview({ data }) {
	const active = data.members.filter((m) => m.status === "Active").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
			title: "Good afternoon, Shoaib 👋",
			subtitle: "Here’s what’s happening at IronCore today."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stats",
			children: [
				[
					"Total members",
					data.members.length,
					Users
				],
				[
					"Active memberships",
					active,
					ShieldCheck
				],
				[
					"Total trainers",
					data.trainers.length,
					UserCheck
				],
				[
					"Monthly revenue",
					"Rs. 428K",
					TrendingUp
				],
				[
					"Today's attendance",
					86,
					CalendarCheck
				]
			].map(([a, b, I]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: a }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: b }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "+8.2% this month" })
			] })] }, a))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "chart-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Revenue overview" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Monthly membership income" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bars",
						children: [
							52,
							68,
							61,
							79,
							73,
							91
						].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { height: `${h}%` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: [
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep"
						][i] })] }, i))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "activity-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Recent activity" }), [
					[
						"AR",
						"Ali Raza checked in",
						"8 min ago"
					],
					[
						"AN",
						"Ayesha joined Premium",
						"25 min ago"
					],
					[
						"ZA",
						"Zara updated a workout",
						"1 hour ago"
					],
					[
						"HK",
						"Hamza payment pending",
						"2 hours ago"
					]
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: x[0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [x[1], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: x[2] })] })] }, x[1]))]
			})]
		})
	] });
}
var fields = {
	member: [
		[
			"name",
			"Full name",
			"text"
		],
		[
			"email",
			"Email",
			"email"
		],
		[
			"phone",
			"Phone",
			"text"
		],
		[
			"age",
			"Age",
			"number"
		],
		[
			"gender",
			"Gender",
			"text"
		],
		[
			"plan",
			"Membership plan",
			"text"
		],
		[
			"joined",
			"Joining date",
			"date"
		],
		[
			"status",
			"Status",
			"text"
		]
	],
	trainer: [
		[
			"name",
			"Name",
			"text"
		],
		[
			"specialty",
			"Specialization",
			"text"
		],
		[
			"experience",
			"Experience",
			"text"
		],
		[
			"phone",
			"Phone",
			"text"
		],
		[
			"assigned",
			"Assigned members",
			"number"
		],
		[
			"status",
			"Status",
			"text"
		]
	],
	workout: [
		[
			"name",
			"Plan name",
			"text"
		],
		[
			"member",
			"Assigned member",
			"text"
		],
		[
			"type",
			"Workout / Diet",
			"text"
		],
		[
			"schedule",
			"Schedule",
			"text"
		]
	]
};
function Crud({ title, subtitle, rows, setRows, kind }) {
	const [q, setQ] = (0, import_react.useState)(""), [open, setOpen] = (0, import_react.useState)(false), [edit, setEdit] = (0, import_react.useState)(null);
	const save = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget), row = { id: edit?.id || Date.now() };
		fields[kind].forEach(([k, , t]) => row[k] = t === "number" ? Number(f.get(k)) : String(f.get(k)));
		setRows((x) => edit ? x.map((a) => a.id === row.id ? row : a) : [row, ...x]);
		setOpen(false);
	};
	const list = rows.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
			title,
			subtitle: `${rows.length} records`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "primary",
				onClick: () => {
					setEdit(null);
					setOpen(true);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add new"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "table-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tools",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: `Search ${title.toLowerCase()}...`
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All records" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Active" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Expired" })
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "table-scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [fields[kind].slice(0, 6).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: x[1] }, x[0])), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [fields[kind].slice(0, 6).map(([k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: k === "status" || k === "type" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { value: String(r[k]) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r[k] }) }, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEdit(r);
						setOpen(true);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "danger",
					onClick: () => confirm("Delete this record?") && setRows((x) => x.filter((a) => a.id !== r.id)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
				})] })] }, r.id)) })] })
			})]
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			title: edit ? `Edit ${kind}` : `Add ${kind}`,
			close: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "form",
				onSubmit: save,
				children: [fields[kind].map(([k, l, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [l, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: k,
					type: t,
					defaultValue: edit?.[k]
				})] }, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "primary",
					children: "Save record"
				})]
			})
		})
	] });
}
function Plans({ rows, setRows }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const save = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		setRows((x) => [...x, {
			id: Date.now(),
			name: String(f.get("name")),
			duration: String(f.get("duration")),
			price: Number(f.get("price")),
			features: String(f.get("features")),
			status: "Active"
		}]);
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
			title: "Membership plans",
			subtitle: "Create and manage gym packages",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "primary",
				onClick: () => setOpen(true),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "New plan"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "plan-grid",
			children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { value: String(p.status) })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["Rs. ", Number(p.price).toLocaleString()] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: p.duration }),
				String(p.features).split(", ").map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), x] }, x)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {}), "Edit"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setRows((x) => x.filter((a) => a.id !== p.id)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
				})] })
			] }, p.id))
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			title: "New membership plan",
			close: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "form",
				onSubmit: save,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						name: "name"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Duration", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						name: "duration"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Price", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "number",
						name: "price"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Features", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						name: "features"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "primary",
						children: "Save plan"
					})
				]
			})
		})
	] });
}
function Attendance({ members }) {
	const [present, setPresent] = (0, import_react.useState)(() => read("gym-attendance", []).map((x) => x.id));
	(0, import_react.useEffect)(() => localStorage.setItem("gym-attendance", JSON.stringify(present.map((id) => ({
		id,
		name: ""
	})))), [present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
			title: "Attendance",
			subtitle: "Mark and review daily check-ins"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mini-stats",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: present.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Present today" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: members.length - present.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Not checked in" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					defaultValue: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "table-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Plan" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Check-in" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: m.name }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: m.plan }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { value: present.includes(m.id) ? "Present" : "Absent" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "mark",
					onClick: () => setPresent((x) => x.includes(m.id) ? x.filter((a) => a !== m.id) : [...x, m.id]),
					children: present.includes(m.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Marked"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Mark present"] })
				}) })
			] }, m.id)) })] })
		})
	] });
}
function Payments({ members }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [payments, setPayments] = (0, import_react.useState)([]);
	const recordPayment = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const memberId = Number(formData.get("member"));
		const amount = Number(formData.get("amount"));
		const method = String(formData.get("method"));
		const date = String(formData.get("date"));
		const selectedMember = members.find((member) => member.id === memberId);
		if (!selectedMember) {
			alert("Member select karo");
			return;
		}
		const newPayment = {
			id: Date.now(),
			member: selectedMember.name,
			plan: selectedMember.plan,
			amount,
			method,
			date,
			status: "Paid"
		};
		setPayments((previousPayments) => [newPayment, ...previousPayments]);
		alert("Payment successfully added");
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
			title: "Payments",
			subtitle: "Track fees and payment records",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "primary",
				onClick: () => setOpen(true),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Record payment"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mini-stats",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: payments.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Total payments" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
					"Rs.",
					" ",
					payments.reduce((total, payment) => total + Number(payment.amount), 0).toLocaleString()
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Total collected" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: members.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Total members" })] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "table-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "table-scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Invoice" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Member" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Plan" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Amount" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Method" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Action" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: payments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 8,
					children: "Abhi koi payment record nahi hai"
				}) }) : payments.map((payment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: ["#INV-", String(payment.id).slice(-6)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: payment.member }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: payment.plan }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
						"Rs.",
						" ",
						Number(payment.amount).toLocaleString()
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: payment.method }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: payment.date }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { value: payment.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "danger",
						type: "button",
						onClick: () => setPayments((oldPayments) => oldPayments.filter((p) => p.id !== payment.id)),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					}) })
				] }, payment.id)) })] })
			})
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			title: "Record payment",
			close: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "form",
				onSubmit: recordPayment,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Member", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: "member",
						required: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select member"
						}), members.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: member.id,
							children: member.name
						}, member.id))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Amount", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						name: "amount",
						min: "1",
						required: true,
						placeholder: "Enter amount"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Payment Method", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: "method",
						required: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select method"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Cash",
								children: "Cash"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Bank Transfer",
								children: "Bank Transfer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Card",
								children: "Card"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "JazzCash",
								children: "JazzCash"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "EasyPaisa",
								children: "EasyPaisa"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Payment Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						name: "date",
						defaultValue: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Save Payment"]
					})
				]
			})
		})
	] });
}
function Profile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
		title: "My profile",
		subtitle: "Manage administrator information"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "profile",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "SK" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Shoaib Khan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gym Administrator" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {}), "Edit profile"]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "profile-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { defaultValue: "Shoaib Khan" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { defaultValue: "admin@ironcore.pk" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { defaultValue: "+92 300 1234567" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Role", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						disabled: true,
						defaultValue: "Administrator"
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Change password" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "profile-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Current password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "password" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["New password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "password" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "primary",
				children: "Update password"
			})
		]
	})] });
}
function SettingsView({ dark, setDark }) {
	const [n, setN] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
		title: "Settings",
		subtitle: "Control appearance, notifications and gym details"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "settings",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Appearance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setDark(!dark),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}), dark ? "Dark mode" : "Light mode"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: dark ? "switch on" : "switch" })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Notifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setN(!n),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {}), "Email and payment notifications"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: n ? "switch on" : "switch" })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Gym information" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "profile-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Gym name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { defaultValue: "IronCore Fitness" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { defaultValue: "hello@ironcore.pk" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { defaultValue: "+92 300 1234567" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Opening hours", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { defaultValue: "Open 24/7" })] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "primary",
					children: "Save changes"
				})
			] })
		]
	})] });
}
function Status({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `status ${value.toLowerCase()}`,
		children: value
	});
}
function Modal({ title, close, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "modal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: close,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			})] }), children]
		})
	});
}
//#endregion
export { App as default };
