import person from '../person.json'
import { FaEnvelope, FaTelegram, FaLinkedin, FaFileAlt, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <a href={`mailto:${person.email}`} target="_blank"><FaEnvelope /></a>
            <a href={person.telegram} target="_blank"><FaTelegram /></a>
            <a href={person.linkedin} target="_blank"><FaLinkedin /></a>
            <a href={person.github} target="_blank"><FaGithub /></a>
            <a href={person.resume} target="_blank"><FaFileAlt /></a>
        </div>
    )
}

export default Footer