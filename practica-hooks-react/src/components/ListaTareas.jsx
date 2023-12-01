import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [];

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case "[TAREAS] Agregar Tarea":
        return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
        return state.map(tarea => {
        if (tarea.id === action.payload) {
        return {
            ...tarea,
            finalizada: !tarea.finalizada
        };
        }
        return tarea;
    });
    case "[TAREAS] Eliminar Tarea":
    return state.filter(tarea => tarea.id !== action.payload);
    case "[TAREAS] Borrar Tarea":
    return [];
    default:
    return state;
}
};

export const ListaTareas = () => {
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState);

    const { tarea, formState, onInputChange } = useForm({ tarea: "" });

    const agregarTarea = event => {
    event.preventDefault();
    if (formState.tarea === "") return;
    const nuevaTarea = {
        id: new Date().getTime(),
        tarea: formState.tarea,
        finalizada: false
    };
    const action = {
        type: "[TAREAS] Agregar Tarea",
        payload: nuevaTarea
    };
    dispatch(action);
    onInputChange("tarea", ""); // Para limpiar el campo de entrada después de agregar una tarea
};

    const finalizarTarea = tarea => {
    const action = {
        type: "[TAREAS] Finalizar Tarea",
        payload: tarea.id
    };
    dispatch(action);
};

    const eliminarTarea = tarea => {
    const action = {
        type: "[TAREAS] Eliminar Tarea",
        payload: tarea.id
    };
    dispatch(action);
};

    const borrarTareas = () => {
    const action = {
        type: "[TAREAS] Borrar Tarea"
    };
    dispatch(action);
};

return (
    <>
    <form onSubmit={agregarTarea}>
        <div className="form-group">
        <input
            type="text"
            className="form-control"
            id="tarea"
            name="tarea"
            placeholder="Ingrese Tarea"
            value={tarea}
            onChange={onInputChange}
        />
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
    </form>

    <hr />

    <ul className="list-group">
        {tareasState.map(item => (
        <li key={item.id} className="list-group-item d-flex justify-content-between">
            <span>{item.tarea}</span>
            <div>
            <input
                type="checkbox"
                checked={item.finalizada}
                onChange={() => finalizarTarea(item)}
            />
            <button
                className="btn btn-danger btn-sm ml-2"
                onClick={() => eliminarTarea(item)}
                >
                Eliminar
            </button>
            </div>
        </li>
        ))}
    </ul>

    <button className="btn btn-danger mt-3" onClick={borrarTareas}>
        Borrar Todas las Tareas
    </button>
    </>
);
};
