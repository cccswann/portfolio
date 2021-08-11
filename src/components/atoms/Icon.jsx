import React from 'react'
import PropTypes from 'prop-types'

// https://featherstyles.com
// import * as Feather from 'react-feather'
import {
  ArrowDownCircle,
  Edit,
  GitHub,
  Twitter,
  Linkedin,
  Rss,
  Sun,
  Moon,
  Compass,
  FileText,
  Key,
  Image,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  Award,
  BookOpen,
  Star,
  Info,
  Dribbble,
  Coffee
} from 'react-feather'
import { icon } from './Icon.module.css'

export default function Icon({ name, ...props }) {
  const components = {
    Dribbble,
    Email: Mail,
    Link: Compass,
    Download: ArrowDownCircle,
    'Info & Download': ArrowDownCircle,
    Styleguide: FileText,
    Blog: Edit,
    Keybase: Key,
    Resume:FileText,
    LinkedIn: Linkedin,
    ArrowDownCircle,
    Edit,
    GitHub,
    Twitter,
    Rss,
    Sun,
    Moon,
    Compass,
    FileText,
    Key,
    Image,
    Mail,
    MapPin,
    Globe,
    Briefcase,
    Award,
    BookOpen,
    Star,
    Info,
    Coffee
  }

  const IconMapped = components[name]
  // const IconComp = Feather[name]
  if (!IconMapped) return null

  return <IconMapped className={icon} {...props} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}
