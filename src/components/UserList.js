import React, {Component} from 'react';

class UserList extends Component {

    // Inicializa el state
    state = {
        users: null
    };

    // Se ejecuta cuando el compoente fue montado
    componentDidMount() {
        this.getData();
    }


    getData = () => {
        const users = [
            {id: 1, name: 'Emey'},
            {id: 2, name: 'Mau'},
            {id: 3, name: 'Ester'},
        ];
        this.setState({users});
    };

    showUser = (item) => {
        alert(item.name);
        console.log('USER', item);
    };


    render() {
        // Se validan las propiedades del state
        if (!this.state.users) {
            return (
                <div>
                    Cargando...
                </div>
            )
        }

        return (
            <div>
                {/*Es una forma no elegante de iterar elementos en react, noy formas mas elegantes de hacerlo*/}
                {this.state.users.map(item => {
                    return (
                        <p onClick={() => this.showUser(item)} key={item.id}>{item.id} - {item.name}</p>
                    )
                })}
            </div>
        );
    }
}

export default UserList;
