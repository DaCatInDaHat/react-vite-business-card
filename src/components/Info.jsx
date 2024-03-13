import photo from '../assets/photo.jpg'
import person from '../person.json'

function Info() {
    return (
    <>
        <img src={photo} className='photo'/>
        <h2>{person.name} {person.lastName}</h2>
        <h3>{person.position}</h3>
    </>
    )
}

export default Info