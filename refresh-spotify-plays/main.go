package main

import (
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	log.Printf("running...")
	superSecretToken := os.Getenv("SUPER_SECRET")
	if superSecretToken == "" {
		log.Fatalf("We need the SUPER_SECRET token :(")
	}
	for {
		log.Printf("refreshing plays...")
		req, err := http.NewRequest("GET", "https://hockerman.com/api/spotify/refresh_plays", nil)
		if err != nil {
			log.Fatalf("error constructing request 1: %v", err.Error())
		}
		req.Header.Set("Authorization", superSecretToken)
		_, err = http.DefaultClient.Do(req)
		if err != nil {
			log.Fatalf("error issuing http request 1: %v", err.Error())
		}
		log.Printf("refreshing tweets...")
		req, err = http.NewRequest("GET", "https://hockerman.com/api/twitter/indexTweets", nil)
		if err != nil {
			log.Fatalf("error constructing request 2: %v", err.Error())
		}
		req.Header.Set("Authorization", superSecretToken)
		_, err = http.DefaultClient.Do(req)
		if err != nil {
			log.Fatalf("error issuing http request 2: %v", err.Error())
		}
		log.Printf("probably went ok??")
		time.Sleep(15 * time.Minute)
	}
}
