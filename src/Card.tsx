import styled from 'styled-components';
import { CardColor } from './theme';
import RatingScale from './RatingScale';

interface CardProps {
    isMobile: boolean;
}

const Card = ({ isMobile }: CardProps) => {
    const mobile = isMobile.toString();

    return (
        <Wrapper $mobile={mobile}>
            <Header>How likely are you to recommend?</Header>
            <RatingScale />
        </Wrapper>
    );
};

interface StyledComponentProps {
    $mobile: string;
}

const Wrapper = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    background-color: ${CardColor};
    border-radius: 12px;

    margin: ${(props) => (props.$mobile === 'true' ? '0 0.5rem' : '0 5rem')};
    padding: 0.5rem 1rem;
    /* padding: ${(props) =>
        props.$mobile === 'true' ? '0.5rem 1rem' : '2rem 4rem'}; */
`;

const Header = styled.div``;

export default Card;
