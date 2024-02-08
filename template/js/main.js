// Write the function camelize(str) that changes dash - separated words like
// “my - short - string” into camel - cased “myShortString”.
Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


const camelize = (str) => {
    return str
    .split('-') //split 'my-long-word' into array ['my','long', 'word']
}