import React, {Component} from 'react';
import ReactDOM from 'react-dom'
class Hello extends Component {
    render() {
        return (
            <>
                <div>Hello World</div>
                <style jsx>{`
                    div {
                        color: red;
                    }
                `}</style>
            </>
        )
    }
}
ReactDOM.render(<Hello />, document.querySelector('div'));