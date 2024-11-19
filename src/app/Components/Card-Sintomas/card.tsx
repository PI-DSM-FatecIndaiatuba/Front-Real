import './card.css'

interface CardProps {
  title: string;
  text: string;
  img: string;
}

const Card = ({title, text, img}: CardProps) => {
  return (
    <div className="w-52 h-80 md:w-60 md:h-96 lg:w-72 lg:h-96	box-border border-solid border-slate-400 border rounded-xl mb-10">
      <img className="w-72 max-h-40 rounded-t-xl	" src={img} alt={title}/>
        <div className="p-2">
          <h4 className="text-center mb-4 text-base md:text-lg lg:text-2xl font-gudea-bold">{title}</h4>
          <p className="text-justify text-xs md:text-sm lg:text-sm box-border font-gudea">{text}</p>
        </div>
    </div>
  )
}

export default Card