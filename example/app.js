import greet from '../.';

const hello = greet();

console.log(hello);

if (module.hot) {
  module.hot.accept();
}
