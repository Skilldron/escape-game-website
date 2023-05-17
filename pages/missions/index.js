import React from 'react'

const missions = ({missions}) => {
  return (
    <div>
        <h1>Missions</h1>
        <ul>
            {missions.data.map(mission => (
                <li key={mission.id}>{mission.attributes.titre}</li>
            ))}
        </ul>
    </div>
  )
}

export async function getStaticProps() {
    const missions = await fetch('http://127.0.0.1:1337/api/missions');
    const missionsJson = await missions.json();
    return {
        props: {
            missions: missionsJson
        }
    }
}


export default missions
