const domContainer = document.querySelector('.react-container');
// const myComponent = React.createElement(Greeting);
// ReactDOM.render(<Greeting name="Jane Doe"/>, domContainer);

const friendData = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        avatar: 'jdog.jpg',
        email:'jdoe@example.com'
    },
    {
        firstName: 'Sally',
        lastName: 'Anne',
        avatar: 'salann.jpg',
        email:'sanne@example.com'
    }
]

const App = () => {
    return (
        <div>
            <Friend friendData={friendData[0]}/>
            
        </div>
    )
}

ReactDOM.render(<App/>,domContainer);