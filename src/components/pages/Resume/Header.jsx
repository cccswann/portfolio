import React from 'react'
import shortid from 'shortid'
import { useResume } from '../../../hooks/use-resume'
import Icon from '../../atoms/Icon'
import { title, description, contact, languagesList } from './Header.module.css'

export default function Header() {
  const { basics, languages } = useResume()
  const { name, label, email, website, location } = basics

  return (
    <>
      <header>
        <p>Resume</p>
        <h1 className={title}>{name}</h1>
        <h3 className={description}>{label}</h3>
      </header>

      <div>
        <ul className={contact}>
          <li>
            <a href={website}>
              <Icon name="Compass" />
              Back to Portfolio
            </a>
          </li>
          <li>
            <a href={'https://drive.google.com/file/d/1-6prSN2NJ0_xRq7Vqwavw--dj8vWYy9o/view?usp=sharing'}>
              <Icon name="FileText" />
              Resume (PDF Copy)
            </a>
          </li>
          <li>
            <Icon name="Mail" />
            <a href={`mailto:${email}`}>Email</a>
          </li>
          <li>
            <Icon name="MapPin" />
            {location.city}, {location.countryCode}
          </li>
          <li className={languagesList}>
            <Icon name="Globe" />
            {languages.map((item) => (
              <p key={shortid.generate()}>
                {item.language}
                <span>{item.fluency}</span>
              </p>
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}
