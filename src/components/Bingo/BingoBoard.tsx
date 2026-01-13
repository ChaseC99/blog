import {useState, useEffect} from "react";
import BingoCard from "./BingoCard.tsx";

interface Props {
  items: {
    title: string;
    completed: boolean;
    completedImage?: string;
  }[];
}

export default function BingoBoard({ items }: Props) {
    const [backgroundImage, setBackgroundImage] = useState<string | undefined>(undefined);

    return (
        <div style={{
            ...styles.bingoGrid,
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        }}>
            {items.map((item, idx) => (
                <BingoCard
                    key={idx}
                    item={item.title}
                    completed={item.completed}
                    completedImage={item.completedImage}
                    dimmed={!!backgroundImage && item.completedImage !== backgroundImage}
                    index={idx}
                    setBackground={(image) => {setBackgroundImage(image)}}
                />
            ))}
        </div>
    );
}

const styles = {
    bingoGrid: {
        "--cell-size": "20%",
        display: "grid",
        gridTemplateColumns: "repeat(5, var(--cell-size))",
        border: "1px solid #000",
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "2rem 0",
    },
};