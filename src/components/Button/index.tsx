import * as S from './styled';

interface ButtonProps {
  description: string;
  width: string;
}

export default function Button({ description, width }: ButtonProps) {
  return(
    <S.Button width={width}>
      <span>{description}</span>
      <S.ButtonLayer className='button-layer' />
    </S.Button>
  );
}