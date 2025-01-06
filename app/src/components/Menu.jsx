import ButtonMenu from "./ButtonMenu";
import IconProfile from '../assets/icons/profile.png';


export default function Menu() {
    return (
        <>
            <div className="menu">
                <ButtonMenu icon={IconProfile} name="Personas" />
                <ButtonMenu icon={IconProfile} name="Favoritos" />
                <ButtonMenu icon={IconProfile} name="Mensajes" />
                <ButtonMenu icon={IconProfile} name="Perfil" />
            </div>
        </>
    )
}