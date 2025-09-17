import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/cobalt", "routes/cobalt/cobalt.tsx"),
  route("/resume", "routes/resume/resume.tsx"),

  ...prefix("/articles", [
    route("gpt-5-and-chess", "./routes/articles/gpt-5-and-chess/GPT5AndChess.tsx"),
    route("novel-two-sum-with-gpt-5", "./routes/articles/novel-two-sum-with-gpt-5/NovelTwoSumWithGPT5.tsx"),
  ])
] satisfies RouteConfig;
