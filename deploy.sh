#!/bin/sh
rm -rf ./out
npm run build
next export
AWS_PROFILE=personal aws s3 sync ./out s3://mhoc-co-website 
rm -rf ./out
AWS_PROFILE=personal aws cloudfront create-invalidation \
  --distribution-id EO1O33M2R2N09 \
  --paths "/*"