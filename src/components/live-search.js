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

  onSearchTermChange(value) {
    this.setState({
      searchTerm: value
    })
  }

  render() {
    const regex = new RegExp(this.state.searchTerm, 'i');
    const searchResults = this.props.characters.filter(character => character.name.match(regex))

    return (
      <div>
        <SearchForm value={this.state.searchTerm} onChange={value => this.onSearchTermChange(value)}/>
        <CharacterCount count={searchResults.length}/>
        <CharacterList characters={searchResults} />
      </div>
    )
  }
}
