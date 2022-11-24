import SearchImage from './search.svg';
import './index.css';
const SearchBar = ({Heading}) => {
    return (  <div class="search-bar">
    <p class="product-heading">{Heading}</p>
    <div class="search-box">
        <input class="search" type="text" placeholder="Search"/>
        <img class="search-icon" src={SearchImage} alt="search"/>
    </div>
</div>);
}
 
export default SearchBar;
