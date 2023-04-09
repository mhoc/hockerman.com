FROM node:18
WORKDIR /workspace 
COPY package.json package-lock.json /workspace/
RUN [ "npm", "ci" ]
COPY components /workspace/components
COPY firebase /workspace/firebase
COPY pages /workspace/pages
COPY public /workspace/public
COPY server /workspace/server
COPY styles /workspace/styles
COPY next-env.d.ts tsconfig.json /workspace/
RUN [ "npm", "run", "build" ]
ENTRYPOINT [ "npm", "start" ]