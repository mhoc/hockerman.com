FROM golang:1.18
COPY go.mod main.go ./
RUN go build -o refresh-spotify-plays.bin github.com/mhoc/hockerman.com/refresh-spotify-plays
ENTRYPOINT [ "refresh-spotify-plays.bin" ]