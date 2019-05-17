npm install -g create-react-app
create-react-app ui-demo --typescript
cd ui-demo
npm install --save typescript redux react-router-dom

npm install --save @types/{node,react,react-dom,react-router-dom,jest} \
                   @types/storybook__react \
                   @types/storybook__addon-{actions,info,links,knobs,a11y,jest}

npm install --save @storybook/addon-{actions,a11y,backgrounds,info,knobs,console,viewport,storysource,cssresourcesreact,jest} \
    react-docgen-typescript-loader


#npm i typescript ts-loader --save-dev


# Storybook
npx -p @storybook/cli sb init
# core-js polyfill
# npm install --save core-js@3

 npm run storybook 