import React from 'react';

export default function CharacterList(props) {
  const charList = props.characters.map((character, index) => {
      return (<li key={index}>
        <strong>{character.name}</strong> ({character.actor}) : {character.description}
      </li>)
  })

  return (
    <ul>
      {charList}
    </ul>
  )
}