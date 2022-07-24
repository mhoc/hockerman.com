import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  let { searchTerm } = req.query;
  searchTerm = decodeURIComponent(searchTerm);
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ROOT_KEY);
  const results = await supabase
    .from("tweets")
    .select()
    .eq("tweeted_by", "MikeHockerman")
    .textSearch("content", searchTerm, { type: "websearch" });
  res.status(200).json({ hits: results.data });
}
