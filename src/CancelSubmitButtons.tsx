import styled from 'styled-components';
import { ButtonColor, CardColor, NumberColor } from './theme';

interface CancelSubmitButtonsProps {
    selectedRating: string;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CancelSubmitButtons = ({
    selectedRating,
    setShowModal,
}: CancelSubmitButtonsProps) => {
    const disableSubmit = selectedRating === '';
    const handleCancel = (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        ev.preventDefault();
        setShowModal(false);
    };

    const handleSubmit = (
        ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        ev.preventDefault();
        window.alert('Thank you!');
        setShowModal(false);
    };

    return (
        <Wrapper>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            <SubmitButton disabled={disableSubmit} onClick={handleSubmit}>
                Submit
            </SubmitButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 0.8rem);
    margin: 2rem 0 1.5rem;
`;

const CustomButton = styled.button`
    padding: 0.4rem 2rem;
    border-radius: 5px;
    color: white;
    &:hover {
        border-color: ${NumberColor};
    }
`;

const CancelButton = styled(CustomButton)`
    background-color: ${CardColor};
    border: 1px solid ${ButtonColor};
`;

const SubmitButton = styled(CustomButton)`
    background-color: ${ButtonColor};
    &:disabled {
        background-color: ${NumberColor};
        color: black;
    }
`;

export default CancelSubmitButtons;
