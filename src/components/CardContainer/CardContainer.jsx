import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './cardcontainer.module.css'

export default function CardContainer({ searchedValue }) {
  const [data, setData] = useState()
  useEffect(()=>{
    async function virustest() {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/covid19?country=${searchedValue}`,
          {
            headers: {
              'X-Api-Key': `kvGrcHWKTvlAj8o7uLhhnCg38oDLidio4bnlbVD0`,
            },
          }
        )
        const info = await response.json()
        setData(info)
        console.log(Object.entries(info[0].cases))
      } catch (error) {
        console.error(error);
      }
    }
    virustest()
  }, [searchedValue])

  return (
    <div className={styles.container}>
      {data ? (
        data[0]?(Object.entries(data[0].cases).map((info, index) => (
            <Card key={index} title={info[0]} description={info[1]} />
          ))):(<p></p>)
      ) : (
        <p></p>
      )}
    </div>
  )
}