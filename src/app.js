import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">search</button>
        </form>
    )
}

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm />
    </header>
)

const Content = (props) => (
    <section>
        <p>{props.AppContent}</p>
        <Items AppItem={props.AppItem} />
    </section>
)

const Items = (props) =>{
    console.log(props.AppItems)
    return (
    <ul>
        {props.Items.map(AppItem => (
            <li>{AppItem}</li>
        ))}
        </ul>
)
}

const App = () => {

    const AppTitle = 'Fronttechs: React'
    const AppContent = 'description'
    const AppItem =[
        "01",
        "02",
        "03",
        "04",
        "05"
    ]
        return (
            <section>
                 <Header AppTitle ={AppTitle} />
                 <Content 
                     AppContent={AppContent}
                     AppItem={AppItem} />
             </section>
        )
}

const element = document.getElementById('app');
ReactDOM.render(<App />,element);