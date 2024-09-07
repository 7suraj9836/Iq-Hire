#!/bin/bash
chmod -R 777 /app
npm install --legacy-peer-deps
npm install redux -f
npm run build
npm run start
# npm run dev
while true; do sleep 1d; done
