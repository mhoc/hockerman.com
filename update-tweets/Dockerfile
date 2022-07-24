FROM golang:1.18
WORKDIR /workspace
COPY go.mod main.go /workspace/
RUN go build -o /workspace/update-tweets.bin github.com/mhoc/hockerman.com/update-tweets
ENTRYPOINT [ "/workspace/update-tweets.bin" ]