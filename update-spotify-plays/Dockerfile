FROM golang:1.18
WORKDIR /workspace
COPY go.mod main.go /workspace/
RUN go build -o /workspace/refresh-spotify-plays.bin github.com/mhoc/hockerman.com/refresh-spotify-plays
ENTRYPOINT [ "/workspace/refresh-spotify-plays.bin" ]