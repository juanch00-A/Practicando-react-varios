import { useFetch } from "../hooks/useFetch";

export const UsuariosComponent = () => {
    const { data, isLoading, errors } = useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <>
            <h1>Lista de usuarios</h1>
            {isLoading ? (
                <h4>Cargando...</h4>
            ) : errors ? (
                <p>Ha ocurrido un error: {errors}</p>
            ) : (
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
