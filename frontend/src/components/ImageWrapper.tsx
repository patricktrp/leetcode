import styled from '@emotion/styled';

export type ImageWrapperProps = {
    picture?: string
    onClick?: () => void
}

const PhotoWrapper = styled.div`
    width: 2.7em;
    height: 2.7em;
    border-radius: 50%; 
    overflow: hidden; 
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageWrapper: React.FC<ImageWrapperProps> = ({ picture, onClick }) => {
    return (
        <PhotoWrapper onClick={onClick}>
            <Img src={picture}></Img>
        </PhotoWrapper >
    );
};

export default ImageWrapper;
