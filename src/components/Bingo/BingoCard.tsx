type Props = {
  item: string;
  completed: boolean;
  completedImage?: string;
  dimmed: boolean;
  index?: number;
  setBackground: (image?: string) => void;
};

export default function BingoCard({
  item,
  completed,
  completedImage,
  dimmed,
  index,
  setBackground,
}: Props) {
    const handleSelection = () => {
        setBackground(completedImage);
    }

    const handleDeselection = () => {
        setBackground();
    };

    return (
        <div
            style={{
                ...styles.bingoCard,
                ...(completed ? styles.completed : {}),
                ...(dimmed ? styles.dimmed : {}),
            }}
            data-index={index}
            data-completed-image={completedImage}
            onMouseEnter={handleSelection}
            onMouseLeave={handleDeselection}
            onKeyDown={handleSelection}
            onClick={handleSelection}
            role="button"
            tabIndex={0}
        >
            <p style={styles.text}>{item}</p>
        </div>
    );
}

const styles = {
    bingoCard: {
        border: "0.5px solid #000",
        boxSizing: "border-box" as const,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.3rem",
        overflow: "hidden" as const,
        position: "relative" as const,
        width: "100%",
        aspectRatio: "1 / 1",
    },
    completed: {
        background: "#4caf50",
        color: "#fff",
    },
    text: {
        margin: 0,
        textAlign: "center" as const,
        fontSize: "clamp(8px, 1.8vmin, 20px)",
        lineHeight: 1.1,
    },
    dimmed: {
        opacity: 0.4,
    }
};