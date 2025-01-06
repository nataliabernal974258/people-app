
export default function ButtonMenu({ icon, name }) {
    return (
        <>
            <button className="menu-item">
                {icon && <img src={icon} alt={name} />}
                <a>{name}</a>
            </button>
        </>
    )
}