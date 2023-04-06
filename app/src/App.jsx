import imagenes from "./assets/imagenes"
import './App.css'
export function App(){
    return(
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
            <img className="avatar" src={imagenes.img3}/>
            <div className="card-info">
                <strong>
                    Panda Enamorado
                </strong>
                <span>
                    @Panda
                </span>
            </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}