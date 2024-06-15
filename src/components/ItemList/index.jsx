import './style.css';

export default function ItemList({ titulo, descricao }) {
    return (
        <div className='item-list'>
            <strong>{titulo}</strong>
            <p>{descricao}</p>
            <hr />
        </div>
    )
}
