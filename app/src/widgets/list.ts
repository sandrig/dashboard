/** AUTOGENERATED (yarn scan:widgets) **/
import { WidgetProperties, WidgetImports } from "widgets";

export type WidgetType =
  | "chart"
  | "counter"
  | "cryptocurrencies"
  | "date-time"
  | "day-countdown"
  | "github-stats"
  | "image"
  | "qr-code"
  | "random-image"
  | "search"
  | "text"
  | "totd-chemical-elements"
  | "totd-world-countries"
  | "twitter-stats"
  | "weather"
  | "website"
  | "youtube-stats";

const widgetProperties: Record<WidgetType, WidgetProperties> = {
  chart: {
    widgetType: "chart",
    category: "tracking",
    configurable: true,
    hasSaga: true,
    initialHeight: 3,
    initialWidth: 7,
    initialOptions: {
      headline: "",
      url: "",
      dataPath: "",
      dataKeyX: "",
      dataKeyY: "",
    },
    initialMeta: { updateCycle: { hours: 24 }, updateStatus: "idle" },
  },
  counter: {
    widgetType: "counter",
    category: "tracking",
    configurable: true,
    hasSaga: false,
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: { headline: "" },
    initialMeta: {},
  },
  cryptocurrencies: {
    widgetType: "cryptocurrencies",
    category: "monitoring",
    configurable: true,
    hasSaga: true,
    initialHeight: 2,
    initialWidth: 3,
    initialOptions: { fiat: "eur", crypto: "bitcoin" },
    initialMeta: { updateCycle: { minutes: 15 }, updateStatus: "idle" },
  },
  "date-time": {
    widgetType: "date-time",
    category: "general",
    configurable: true,
    hasSaga: false,
    initialHeight: 2,
    initialWidth: 3,
    initialOptions: { headline: "", timezone: "auto" },
    initialMeta: {},
  },
  "day-countdown": {
    widgetType: "day-countdown",
    category: "tracking",
    configurable: true,
    hasSaga: false,
    initialHeight: 2,
    initialWidth: 3,
    initialOptions: { eventName: "" },
    initialMeta: {},
  },
  "github-stats": {
    widgetType: "github-stats",
    category: "monitoring",
    configurable: true,
    hasSaga: true,
    initialHeight: 3,
    initialWidth: 3,
    initialOptions: { query: "" },
    initialMeta: {
      updateCycle: { hours: 24 },
      updateStatus: "idle",
      headlineIcon: "github",
    },
  },
  image: {
    widgetType: "image",
    category: "media",
    configurable: true,
    hasSaga: false,
    initialHeight: 4,
    initialWidth: 4,
    initialOptions: { url: "" },
    initialMeta: {},
  },
  "qr-code": {
    widgetType: "qr-code",
    category: "tools",
    configurable: true,
    hasSaga: false,
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: { headline: "", content: "" },
    initialMeta: {},
  },
  "random-image": {
    widgetType: "random-image",
    category: "media",
    configurable: false,
    hasSaga: true,
    initialHeight: 4,
    initialWidth: 6,
    initialOptions: {},
    initialMeta: { updateCycle: { hours: 24 }, updateStatus: "idle" },
  },
  search: {
    widgetType: "search",
    category: "tools",
    configurable: true,
    hasSaga: false,
    initialHeight: 2,
    initialWidth: 4,
    initialOptions: {
      title: "DuckDuckGo",
      pattern: "https://duckduckgo.com/?q=%s",
    },
    initialMeta: {},
  },
  text: {
    widgetType: "text",
    category: "general",
    configurable: true,
    hasSaga: false,
    initialHeight: 4,
    initialWidth: 4,
    initialOptions: { headline: "" },
    initialMeta: {},
  },
  "totd-chemical-elements": {
    widgetType: "totd-chemical-elements",
    category: "knowledge",
    configurable: false,
    hasSaga: true,
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: {},
    initialMeta: { updateCycle: { hours: 24 }, updateStatus: "idle" },
  },
  "totd-world-countries": {
    widgetType: "totd-world-countries",
    category: "knowledge",
    configurable: false,
    hasSaga: true,
    initialHeight: 3,
    initialWidth: 3,
    initialOptions: {},
    initialMeta: {
      updateCycle: { hours: 24 },
      updateStatus: "idle",
      headlineIcon: "globe",
    },
  },
  "twitter-stats": {
    widgetType: "twitter-stats",
    category: "monitoring",
    configurable: true,
    hasSaga: true,
    initialHeight: 3,
    initialWidth: 3,
    initialOptions: { username: "" },
    initialMeta: {
      updateCycle: { hours: 24 },
      updateStatus: "idle",
      headlineIcon: "twitter",
    },
  },
  weather: {
    widgetType: "weather",
    category: "general",
    configurable: true,
    hasSaga: true,
    initialHeight: 2,
    initialWidth: 4,
    initialOptions: { lat: "", lon: "", unit: "metric" },
    initialMeta: { updateCycle: { hours: 4 }, updateStatus: "idle" },
  },
  website: {
    widgetType: "website",
    category: "media",
    configurable: true,
    hasSaga: false,
    initialHeight: 5,
    initialWidth: 5,
    initialOptions: { url: "" },
    initialMeta: {},
  },
  "youtube-stats": {
    widgetType: "youtube-stats",
    category: "monitoring",
    configurable: true,
    hasSaga: true,
    initialHeight: 3,
    initialWidth: 3,
    initialOptions: { query: "" },
    initialMeta: {
      updateCycle: { hours: 24 },
      updateStatus: "idle",
      headlineIcon: "youtube",
    },
  },
};
export default widgetProperties;

export const widgetImports: Record<WidgetType, WidgetImports> = {
  chart: {
    component: async () => import("widgets/chart"),
    configuration: async () => import("widgets/chart/configuration"),
  },
  counter: {
    component: async () => import("widgets/counter"),
    configuration: async () => import("widgets/counter/configuration"),
  },
  cryptocurrencies: {
    component: async () => import("widgets/cryptocurrencies"),
    configuration: async () => import("widgets/cryptocurrencies/configuration"),
  },
  "date-time": {
    component: async () => import("widgets/date-time"),
    configuration: async () => import("widgets/date-time/configuration"),
  },
  "day-countdown": {
    component: async () => import("widgets/day-countdown"),
    configuration: async () => import("widgets/day-countdown/configuration"),
  },
  "github-stats": {
    component: async () => import("widgets/github-stats"),
    configuration: async () => import("widgets/github-stats/configuration"),
  },
  image: {
    component: async () => import("widgets/image"),
    configuration: async () => import("widgets/image/configuration"),
  },
  "qr-code": {
    component: async () => import("widgets/qr-code"),
    configuration: async () => import("widgets/qr-code/configuration"),
  },
  "random-image": {
    component: async () => import("widgets/random-image"),
  },
  search: {
    component: async () => import("widgets/search"),
    configuration: async () => import("widgets/search/configuration"),
  },
  text: {
    component: async () => import("widgets/text"),
    configuration: async () => import("widgets/text/configuration"),
  },
  "totd-chemical-elements": {
    component: async () => import("widgets/totd-chemical-elements"),
  },
  "totd-world-countries": {
    component: async () => import("widgets/totd-world-countries"),
  },
  "twitter-stats": {
    component: async () => import("widgets/twitter-stats"),
    configuration: async () => import("widgets/twitter-stats/configuration"),
  },
  weather: {
    component: async () => import("widgets/weather"),
    configuration: async () => import("widgets/weather/configuration"),
  },
  website: {
    component: async () => import("widgets/website"),
    configuration: async () => import("widgets/website/configuration"),
  },
  "youtube-stats": {
    component: async () => import("widgets/youtube-stats"),
    configuration: async () => import("widgets/youtube-stats/configuration"),
  },
};

export const initialMeta = (widgetType: WidgetType) =>
  widgetProperties[widgetType].initialMeta;
