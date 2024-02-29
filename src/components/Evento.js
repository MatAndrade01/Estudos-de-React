import Button from "./evento/Button"

function Evento() {

    function meuEvento() {
            console.log(`Ativando primeiro evento!`)
    }

    return(
        <div>
            <p>Clique para dispara um Evento</p>
            <Button event={meuEvento} text = "Primeiro Evento"/>
        </div>
    )
}

export default Evento