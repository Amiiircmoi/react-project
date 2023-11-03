// OLD WAY TO USE REACT COMPONENTS

import { Component } from "react";

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black">
                                <div className="card-body p-md-5 text-center">
                                    <div className="row justify-content-center">
                                        <h1>Aimez vous Instacrame ?</h1>
                                        <h5 className="text-danger">Likes : {this.state.count}</h5>
                                        <button className="btn btn-success btn-lg" onClick={() => this.setState({ count: this.state.count + 1 })}>J'aime !</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Like;