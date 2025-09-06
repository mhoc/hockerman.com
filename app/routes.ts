import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/cobalt", "routes/cobalt/cobalt.tsx"),

  ...prefix("/articles", [
    route("gpt-5-and-chess", "./routes/articles/gpt-5-and-chess/GPT5AndChess.tsx"),
  ])
] satisfies RouteConfig;
