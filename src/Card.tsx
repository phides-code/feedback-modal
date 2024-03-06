import styled from 'styled-components';
import { ButtonColor, CardColor, NumberColor } from './theme';
import RatingScale from './RatingScale';
import { useEffect, useRef, useState } from 'react';
import CancelSubmitButtons from './CancelSubmitButtons';

interface CardProps {
    isMobile: boolean;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({ isMobile, showModal, setShowModal }: CardProps) => {
    const [selectedRating, setSelectedRating] = useState<string>('');
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClose = (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        ev.preventDefault();
        setShowModal(false);
    };

    useEffect(() => {
        const handleOutsideClick = (ev: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(ev.target as Node)
            ) {
                setShowModal(false);
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setShowModal, showModal]);

    return (
        <Wrapper $mobile={isMobile.toString()} ref={modalRef}>
            <ButtonWrapper>
                <CloseButton onClick={handleClose}>X</CloseButton>
            </ButtonWrapper>
            <CardContentWrapper>
                <Header>
                    How likely are you to recommend FrontendPro to someone you
                    know?
                </Header>
                <RatingScale
                    isMobile={isMobile}
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                />
                <CancelSubmitButtons
                    selectedRating={selectedRating}
                    setShowModal={setShowModal}
                />
            </CardContentWrapper>
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
    padding: 0.5rem 1rem;

    margin: ${(props) => (props.$mobile === 'true' ? '0 0.5rem' : '0 5rem')};
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0.6rem 0 0;
`;

const CloseButton = styled.button`
    font-size: large;
    border: none;
    color: ${NumberColor};
    background-color: ${CardColor};
    &:hover {
        color: ${ButtonColor};
    }
`;

const CardContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 2rem;
    padding: 0 4rem;
    max-width: 22rem;
    text-align: center;
`;

export default Card;
