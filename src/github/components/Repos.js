import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../../common/components/Loading';
import Error from '../../common/components/Error';
/*
    Esse é um stateful component, ele é criado como uma classe. Utilizo esse tipo de component
    apenas se eu precisar dos métodos de ciclo de vida do React ou do seu state
*/

class Repos extends Component {

    state = {
        repos: [],
        isLoading: false,
        hasError: false
    }

    componentDidMount() {
        this.loadRepos();
    }

    loadRepos = () => {
        this.setState({ isLoading: true });

        axios.get('https://api.github.com/users/alstan/repos')
            .then((response) => this.setState({ repos: response.data }))
            .catch((error) => this.setState({ hasError: true }))
            .then(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div className="repos">
                {this.state.isLoading &&
                    <Loading />
                }

                {this.state.hasError &&
                    <Error />
                }

                {
                    this.state.repos.map((repo) =>
                        <div key={repo.id}>
                            <div>
                                {repo.id}
                            </div>
                            <div>
                                {repo.name}
                            </div>
                            <hr />
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Repos;