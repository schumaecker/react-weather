var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Roanoke'>Roanoke, VA</Link>
        </li>
        <li>
          <Link to='/?location=New York City'>NYC</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
