# Experimental Project for React Primitives and Lerna

## Setup Dependencies

```bash
yarn
lerna bootstrap    
```

## Demo Web

```bash
cd ecommerce-web
yarn
yarn build
cd dist
browser-sync start --server --files="*"
```

## Demo IOS

```bash
yarn
yarn run haul start -- --platform ios
react-native run-ios
```

## Demo Android

```bash
yarn
yarn run haul start -- --platform android
react-native run-android
```

## Demo Sketch

```bash
yarn
yarn render
```