import styled from 'styled-components';
import { NumberBackground, NumberBorder, NumberColor } from './theme';

interface RatingScaleProps {
    isMobile: boolean;
    selectedRating: string;
    setSelectedRating: React.Dispatch<React.SetStateAction<string>>;
}

const RatingScale = ({
    isMobile,
    selectedRating,
    setSelectedRating,
}: RatingScaleProps) => {
    const scale: string[] = [];
    for (let i = 1; i <= 10; i++) {
        scale.push(i.toString());
    }

    const handleRatingChange = (rating: string) => {
        setSelectedRating(rating);
    };

    const mobile = isMobile.toString();

    return (
        <Wrapper $mobile={mobile}>
            <ScaleWrapper $mobile={mobile}>
                {scale.map((rating) => (
                    <RatingWrapper
                        $mobile={mobile}
                        key={rating}
                        $checked={(selectedRating === rating).toString()}
                        onClick={() => handleRatingChange(rating)}
                    >
                        {rating}
                    </RatingWrapper>
                ))}
            </ScaleWrapper>
            <HelperText $mobile={mobile}>
                <div>Not likely at all</div>

                <div>Extremely likely</div>
            </HelperText>
        </Wrapper>
    );
};

interface RatingWrapperProps {
    $checked: string;
    $mobile: string;
}

interface ScaleWrapperProps {
    $mobile: string;
}

const Wrapper = styled.div<ScaleWrapperProps>`
    display: flex;
    flex-direction: ${(props) => (props.$mobile === 'true' ? 'row' : 'column')};
    width: 100%;
    justify-content: center;
`;

const ScaleWrapper = styled.div<ScaleWrapperProps>`
    display: flex;
    flex-direction: ${(props) => (props.$mobile === 'true' ? 'column' : 'row')};

    justify-content: space-between;
    align-items: center;
`;

const RatingWrapper = styled.div<RatingWrapperProps>`
    color: ${(props) =>
        props.$checked === 'true' ? 'white' : `${NumberColor}`};

    border: ${(props) =>
        props.$checked === 'true'
            ? `1px solid ${NumberColor}`
            : `1px solid ${NumberBorder}`};

    background-color: ${NumberBackground};
    display: flex;
    flex-direction: column;
    height: 2rem;
    width: 2rem;
    border-radius: 12%;
    align-items: center;
    justify-content: center;
    margin: ${(props) => (props.$mobile === 'true' ? '0.2rem' : '0 0.4rem')};

    &:hover {
        border: 1px solid ${NumberColor};
        color: white;
        cursor: default;
    }
`;

const HelperText = styled.div<ScaleWrapperProps>`
    display: flex;
    flex-direction: ${(props) => (props.$mobile === 'true' ? 'column' : 'row')};
    justify-content: space-between;
    font-size: x-small;
    padding: 0 0.4rem;
    margin: 0.4rem 0;
`;

export default RatingScale;
