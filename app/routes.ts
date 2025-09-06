import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/cobalt", "routes/cobalt/cobalt.tsx"),
] satisfies RouteConfig;
