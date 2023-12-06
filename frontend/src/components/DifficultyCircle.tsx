export type DifficultyCircleProps = {
    difficulty: string
}

const DifficultyCircle: React.FC<DifficultyCircleProps> = ({ difficulty }) => {
    return (
        <div>
            {difficulty}
        </div>
    )
}

export default DifficultyCircle;