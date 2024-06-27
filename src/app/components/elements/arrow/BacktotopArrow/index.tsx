import ArrowIcon from '@/app/_asset/icon/backtotop-arrow.svg';

type Props = {
  scrollPosition: number;
}

export const BacktotopArrow = (props: Props): JSX.Element => {
  const { scrollPosition } = props;
  // const onClickBacktotop  = () => {
  //   alert(scrollPosition);
  // }

  return (
    <>
      { scrollPosition > 32 &&
      <i
      className="c-arrow-backtotop"
      // onClick={() => onClickBacktotop()}
      >
        <ArrowIcon className="c-arrow-backtotop__icon" />
      </i>
      }
    </>
  );
}