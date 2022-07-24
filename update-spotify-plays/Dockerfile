FROM golang:1.18
WORKDIR /workspace
COPY go.mod main.go /workspace/
RUN go build -o /workspace/update-spotify-plays.bin github.com/mhoc/hockerman.com/update-spotify-plays
ENTRYPOINT [ "/workspace/update-spotify-plays.bin" ]