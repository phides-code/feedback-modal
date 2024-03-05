const RatingScale = () => {
    const scale: string[] = [''];
    for (let i = 0; i < 10; i++) {
        scale.push(i.toString());
    }

    return (
        <div>
            {scale.map((rating) => (
                <div>{rating}</div>
            ))}
        </div>
    );
};

export default RatingScale;
