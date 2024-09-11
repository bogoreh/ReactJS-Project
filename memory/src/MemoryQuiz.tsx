
import _ from 'lodash';
import { useEffect, useState } from 'react';
import CardItem from './CardItem';

export type GameState = {

  pair:number[],
  flipped:number[]
}

const MemoryQuiz = (props:{clist:number[]}) => {

  console.log('re-render quiz');

  const [state, setState] = useState<GameState>({pair:[], flipped:[]});

  const setCardState = (cardId:number) => {

    if (state.flipped.includes(cardId)) return;
    
    console.log('Do set state');
    let {pair, flipped} = state;
    if (pair.length == 1) {
      if (pair[0] == cardId) {
        flipped.push(cardId);
      }
      pair = [];
    }
    else pair = [cardId];
    setState({pair, flipped});
  };

  useEffect(() => {
    //console.log(state.pair, state.flipped);
  });

  const renderedList = props.clist.map((it, index) => (
      <CardItem key={index} id={it} isFlipped={state.flipped.includes(it)} setCardState={setCardState}></CardItem>
    ));

  return (
    <div className="overflow-hidden memory-quiz mx-auto bg-gray-200 rounded-lg text-gray-900 p-4">
      {renderedList}
    </div>
  )
};

export default MemoryQuiz;
