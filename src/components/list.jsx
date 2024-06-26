import './list.css'


export default function List({ items, deleteItem }) {
    return (
        <ul>
            {items.map((value, index) => (
                <li key={index}>
                    <p className="title">{value}</p>
                    <button className='delete' onClick={() => deleteItem(value)}>tirmini</button>
                </li>
            ))}
        </ul>
    );
}