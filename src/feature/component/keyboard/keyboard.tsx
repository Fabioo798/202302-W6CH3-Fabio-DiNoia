import { Key } from './../key/Key';

export function Keyboard({ handleKeyClick }: any) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
    return (
      <div className="keyboard-container">
        <ol className="keyboard">
          {numbers.map((number) => (
            <Key
              key={number}
              value={number}
              handleKeyClick={handleKeyClick}
            />
          ))}
          <li>
            <Key value="delete" handleKeyClick={handleKeyClick} big />
          </li>
        </ol>
      </div>
    );
  }
