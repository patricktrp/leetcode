import styled from '@emotion/styled';

export type ImageWrapperProps = {
    picture: string
}

const PhotoWrapper = styled.div`
    width: 4.5vh;
    height: 4.5vh;
    border-radius: 50%; 
    overflow: hidden; 
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageWrapper: React.FC<ImageWrapperProps> = ({ picture }) => {
    return (
        <PhotoWrapper>
            <Img src={picture}></Img>
        </PhotoWrapper >
    );
};

export default ImageWrapper;
