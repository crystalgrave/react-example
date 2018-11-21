const domContainer = document.querySelector('.react-container');
// const myComponent = React.createElement(Greeting);
// ReactDOM.render(<Greeting name="Jane Doe"/>, domContainer);

const App = () => {
    return (
        <div>
            <Greeting name="Jane Doe"/>
            <Greeting name="Sally Anne"/>
        </div>
    )
}

ReactDOM.render(<App/>,domContainer);