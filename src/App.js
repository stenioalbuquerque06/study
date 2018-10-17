import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Error from './Error';
/*
    Esse é um stateful component, ele é criado como uma classe. Utilizo esse tipo de component
    apenas se eu precisar dos métodos de ciclo de vida do React ou do seu state
*/
class App extends Component {

    state = {
        repos: [],
        profile: {},
        isReposLoading: false,
        isProfileLoading: false,
        profileHasError: false,
        reposHasError: false
    }

    componentDidMount() {
        this.loadRepos();
        this.loadProfile();
    }

    loadProfile = () => {
        this.setState({ isProfileLoading: true });

        axios.get('https://api.github.com/users/alstan')
            .then((response) => this.setState({ profile: response.data }))
            .catch((error) => this.setState({ profileHasError: true }))
            .then(() => this.setState({ isProfileLoading: false }))
    }

    loadRepos = () => {
        this.setState({ isReposLoading: true });

        axios.get('https://api.github.com/users/alstan/repos')
            .then((response) => this.setState({ repos: response.data }))
            .catch((error) => this.setState({ reposHasError: true }))
            .then(() => this.setState({ isReposLoading: false }))
    }

    render() {
        return (
            <div className="App">
                <div className="profile">
                    {this.state.isProfileLoading &&
                        <Loading/>
                    }
                    {this.state.profileHasError &&
                        <Error/>
                    }

                    {
                        <div>
                            <div>
                                <img src={this.state.profile.avatar_url} height="100px" />
                                
                            </div>
                            <h2>
                                {this.state.profile.login}
                            </h2>
                            <h3> 
                                {this.state.profile.name} 
                            </h3>
                            <hr />
                        </div>
                    }


                </div>

                <div className="repos">
                    {this.state.isReposLoading &&  
                        <Loading/>
                    }

                    {this.state.reposHasError &&
                        <Error/>
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
            </div>
        );
    }
}

export default App;