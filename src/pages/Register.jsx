import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../redux/actions/userActions";

const Register = () => {
    const [userId, setUserId] = useState(null)
    const [username, setUsername] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userIdentity, setUserIdentity] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (username && userPassword && userIdentity) {
            const newUser = {
                id: Date.now(),
                username: username,
                password: userPassword,
                identity: userIdentity,
            }
            dispatch(addUser(newUser));
            setUserId(null);
            setUsername('');
            setPassword('');
            setUserIdentity('');
        }
    };

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    };

    const handleEdit = (user) => {
        setUserId(user.id);
        setUsername(user.username);
        setPassword(user.password);
        setUserIdentity(user.identity);
    }

    const handleUpdate = () => {
        if (username && userPassword && userIdentity) {
            handleDelete(userId);
            handleAdd();
            setUserId(null);
        }
    }

    return (
        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Inscrivez vous !</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="identite">Nom</label>
                                                    <input
                                                        value={userIdentity}
                                                        onChange={(e) => setUserIdentity(e.target.value)}
                                                        type="text" id="identite" className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="username">Nom d'utilisateur</label>
                                                    <input
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        type="text" id="username" className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="password">Mot de passe</label>
                                                    <input
                                                        value={userPassword}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        type="password" id="password" className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            {userId ? (
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={handleUpdate} type="button" className="btn btn-warning btn-lg">Mettre à jour !</button>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="form-check d-flex justify-content-center mb-5">
                                                        <input className="form-check-input me-2" type="checkbox" value="" id="accept" />
                                                        <label className="form-check-label" htmlFor="accept">
                                                            J'accepte les <a href="#!">conditions d'utilisation</a>
                                                        </label>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button onClick={handleAdd} type="button" className="btn btn-primary btn-lg">Je m'inscris !</button>
                                                    </div>
                                                </>
                                            )}

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center">
                    <h2>Liste d'utilisateur (ADMIN)</h2>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nom d'utilisateur</th>
                                <th>Mot de passe</th>
                                <th>Identité</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.username}>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.identity}</td>
                                    <td>
                                        <div className="row">
                                            <div className="col-auto">
                                                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(user)}>Modifier</button>
                                            </div>
                                            <div className="col-auto">
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Supprimer</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
};

export default Register;
