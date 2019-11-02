const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join('<br>');

const element = (
  <div title="Outer div">
    <h1 className="red-text" dangerouslySetInnerHTML={{__html: message}}></h1>
  </div>
);

ReactDOM.render(element, document.querySelector('#root'));