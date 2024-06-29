import ArrowIcon from '@/app/_asset/icon/backtotop-arrow.svg';

type Props = {
  scrollPosition: number;
  scrollTotopFunc: VoidFunction;
}

export const BacktotopArrow = (props: Props): JSX.Element => {
  const { scrollPosition, scrollTotopFunc } = props;

  return (
    <>
      { scrollPosition > 32 &&
      <i
      className="c-arrow-backtotop"
      onClick={() => scrollTotopFunc()}
      >
        <ArrowIcon className="c-arrow-backtotop__icon" />
      </i>
      }
    </>
  );
}