const domContainer = document.querySelector('.react-container');
// const myComponent = React.createElement(Greeting);
// ReactDOM.render(<Greeting name="Jane Doe"/>, domContainer);

const App = () => {
    return (
        <div>
            <Friend firstName="Jane" lastName="Doe" avatar="jdoe.jpg" email="jdoe100@gmail.com"/>
            
        </div>
    )
}

ReactDOM.render(<App/>,domContainer);