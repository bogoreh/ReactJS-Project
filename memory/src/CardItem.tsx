import { useRef } from "react";

const CardItem = (props:{id:number, isFlipped:boolean,  setCardState:(cardId:number) => void}) => {

  const theOpacity = props.isFlipped ? '0' : '1';
  const divRef = useRef<HTMLDivElement>(null);
  const timeOutId = useRef(0);

  return (
    <div className="transition-all duration-500 relative rounded-lg card-item float-left m-1 cursor-pointer w-64 h-64" style={{opacity:theOpacity}}

    onClick={() => {

      // Update state
      props.setCardState(props.id)

      // Hide card with timeout
      divRef.current!.style.display = 'none';
      clearTimeout(timeOutId.current);
      timeOutId.current = setTimeout(() => {

        console.log('time out');
        divRef.current!.style.display = 'block';
      }, 1000);

    }}>
      <img src={`assets/${props.id + 1}.png`} alt="" />
      <div ref={divRef} className="absolute top-0 left-0 w-full h-full bg-red-500"></div>
    </div>
  )
}

export default CardItem;
