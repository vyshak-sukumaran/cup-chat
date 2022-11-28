import s from './RoomCard.module.css'

type CardProps = {
    name: string
    description: string
}
const RoomCard = (props: CardProps) => {
    const { name, description } = props
  return (
    <div className={s.card}>
        <header className={s.cardHeader}>
            <span>{name}</span>
        </header>
        <div className={s.cardBody}>
            <div className={s.description}>
                <span className={s.user}>{description}</span>
            </div>
            <div className={s.online}>
                <span>●</span>
                <span>14</span>
            </div>
        </div>
    </div>
  )
}

export default RoomCard