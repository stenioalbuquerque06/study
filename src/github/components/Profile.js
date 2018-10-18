import React from 'react';
import axios from 'axios';
import Loading from '../../common/components/Loading';
import Error from '../../common/components/Error';

class Profile extends React.Component {
    state = {
        profile: {},
        isLoading: false,
        hasErrors: false
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = () => {
        this.setState({ isLoading: true });

        axios.get('https://api.github.com/users/alstan')
            .then((response) => this.setState({ profile: response.data }))
            .catch((error) => this.setState({ hasError: true }))
            .then(() => this.setState({ isLoading: false }))
    }


    render() {
        return (
            <div className="profile">
                {this.state.isLoading &&
                    <Loading />
                }
                {this.state.HasError &&
                    <Error />
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
        );
    }
}

export default Profile 