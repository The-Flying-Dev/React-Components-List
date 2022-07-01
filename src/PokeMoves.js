import { moves } from "./data";
import PokeMoveCard from "./PokeMoveCard";


function PokeMoves() {

  // (1) first map through array
  // (2) return the {VALUES} inside each <li> element that is being rendered
  // (3) React needs a UNIQUE key for each ITEM when mapping through an array

  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>        
        {moves.map(item => ( 
          //<li key={item.id}>{item.move}</li>
          <PokeMoveCard key={item.id} {...item} />        
        ))}
      </ul>
    </div>
  );
}

export default PokeMoves;