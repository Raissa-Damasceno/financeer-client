import { Content } from './SearchBar.styles';

const SearchBar = ({ searchInput, handleSearchStock }) => {

    return (
        <Content>
            <form onSubmit={(e) => handleSearchStock(e)}>
                <input id='searchInput' type="text" placeholder="Enter a symbol" />
                <button id='search-button' type="submit">
                </button>
            </form>
        </Content>
        
    );
};

export default SearchBar;