import React, { useState } from "react";

import BasePage from "../../components/BasePage";
import { TextDeemph, TextLink, TextLoading, TextStd } from "../../components/text";
import { useTwitterSearch } from "../../components/hooks/useTwitterSearch";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const Twitter = () => {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ submit, setSubmit ] = useState(0);
  
  const onInputChange = (e: any) => setSearchTerm(e.target.value);
  const onInputKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setSubmit(p => p + 1);
    }
  }

  const results = useTwitterSearch(searchTerm, submit);
  
  return (
    <>
      <BasePage header="./better_twitter_search" nav={[{ label: "home", href: "/" }, { label: "twitter" } ]}>
        <div className="container">
          <TextDeemph>
            Ever tried to use <TextLink href="https://twitter.com/search-advanced?lang=en">Twitter's advanced search</TextLink>?
            It is quite bad. Pretty incredible that just a full text search index in Postgres is better. Type and hit enter.
          </TextDeemph>
          <TextDeemph>
            This is, uh, just my tweets though. Sorry. Fork it :)
          </TextDeemph>
          <input 
            className="search-input" 
            onChange={onInputChange}
            onKeyDown={onInputKeyDown} />
          {results.state === "loading" && <TextLoading />}
          {results.state === "results" && (!results.hits || results.hits.length === 0) && (
            <TextStd>No Results!</TextStd>
          )}
          {results.state === "results" && results.hits.length > 0 && (
            <div className="results">
              {results.hits.map(r => (
                <div className="result" key={r.id}>
                  <span>
                    <TextDeemph>{r.tweeted_at}</TextDeemph>&nbsp;
                    <TextLink href={`https://twitter.com/mikehockerman/status/${r.id}`}>{">"}</TextLink>
                  </span>
                    <TextStd>{r.content}</TextStd>&nbsp;
                </div>
              ))}
            </div>
          )}
        </div>
      </BasePage>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
        .search-input {
          background-color: ${colors.background};
          border: none;
          border-bottom: 1px solid ${colors.secondary};
          color: ${colors.primary};
          font-family: ${fonts.primary};
          margin: 16px 0px;
          max-width: 50%;
          padding: 8px;
        }
        .results {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          max-width: 600px;
        }
        .result {
          border: 1px solid ${colors.deemphasize};
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          padding: 8px;
        }
      `}</style>
    </>
  )
}

export default Twitter;
