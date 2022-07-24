package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	log.Printf("setting up signal handlers")
	sigs := make(chan os.Signal, 1)
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		sig := <-sigs
		log.Printf("received signal: %v", sig)
		os.Exit(0)
	}()

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
