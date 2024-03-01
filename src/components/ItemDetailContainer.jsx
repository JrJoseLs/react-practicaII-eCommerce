import { useEffect, useState } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;
    // console.log(id);

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id]); // Agrega itemId a la lista de dependencias

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;
