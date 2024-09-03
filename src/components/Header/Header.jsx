import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css'

export default function Header({handleform}) {
    const [inputValue,setInputValue]=useState('')
    const handleInputChange=(e)=>{
    setInputValue(e.target.value)
  }
    const [countryname,setCountryname]=useState('')
    const handleformdata=(e)=>{
        e.preventDefault()
        handleform(inputValue)
        setCountryname(inputValue)
    }
  return (
    <header className={styles.header}>
        <a href="#" onClick={() => window.location.reload()} className={styles.homebtn}>Covid-19</a>
        <div className={styles.input_country}>
            <form onSubmit={handleformdata}>
                <input onChange={handleInputChange} placeholder='Enter a country' type="text" />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            <h2>{countryname}</h2>
        </div>
    </header>
  )
}
