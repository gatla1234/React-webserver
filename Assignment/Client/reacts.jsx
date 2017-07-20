var Greeting = React.createClass({
    render: function() {
        return (
            <p>Hello, ReactJs is working</p>
        )
    }
});

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);