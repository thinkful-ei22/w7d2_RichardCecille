import React from 'react'
import CharacterCount from './character-count'
import CharacterList from './character-list'
import SearchForm from './search-form'


export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    }
  }

  render() {
    return (
      <div>
        <SearchForm />
        <CharacterCount />
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}