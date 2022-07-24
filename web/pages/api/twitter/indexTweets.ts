import { createClient } from "@supabase/supabase-js";
import { Client } from "twitter-api-sdk";

const MIKEHOCKERMAN_TWITTER_USER_ID = "965662694010388482";

export default async function handler(req, res) {
  const superSecretAuthenticationPlzDontHackMe = req.headers.authorization;
  if (process.env.SUPER_SECRET !== superSecretAuthenticationPlzDontHackMe) {
    throw new Error("BAD AUTH BAD BAD BAD");
  }
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ROOT_KEY);
  const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN);

  const newestInDb = await supabase
    .from("tweets")
    .select()
    .eq("tweeted_by", "MikeHockerman")
    .order("tweeted_at", { ascending: false })
    .limit(1);
  const newestId = newestInDb.data[0].id;

  let paginationToken = undefined;
  while (true) {
    const tweets = await twitterClient.tweets.usersIdTweets(MIKEHOCKERMAN_TWITTER_USER_ID, {
      "since_id": newestId,
      "tweet.fields": [ "id", "created_at", "text" ],
      "pagination_token": paginationToken,
    });
    if (tweets.meta.result_count === 0) {
      break;
    }
    for (const tweet of tweets.data) {
      await supabase.from("tweets").upsert({
        id: tweet.id,
        content: tweet.text,
        tweeted_at: new Date(tweet.created_at),
        tweeted_by: "MikeHockerman",
      });
    }
    paginationToken = tweets.meta.next_token;
    if (!paginationToken) {
      break;
    }
  }

  res.status(200).json({ ok: true });
}
