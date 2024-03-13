import person from '../person.json'

function About() {
    return (
        <div className='about'>
            <h4>About</h4>
            <p>{person.about}</p>
        </div>
    )
}

export default About