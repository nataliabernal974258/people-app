import results from "../mocks/Users.json"

export default function Header() {
    console.log(results)
    return (
        <>
            <div className="header">
                <h1>People</h1>
                <div className="user">
                    <button className="profile">Perfil</button>
                    Nombre 
                    <button>Noti</button>
                </div>
            </div>
        </>
    )
}