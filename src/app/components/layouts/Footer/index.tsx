import { BacktotopArrow } from '@/app/components/elements/arrow/BacktotopArrow';

type Props = {
  scrollPosition: number;
}

export const Footer = (props: Props): JSX.Element => {
  const { scrollPosition } = props;

  return (
    <footer className="l-footer">
      <div className="c-arrow">
        <BacktotopArrow scrollPosition={scrollPosition} />
      </div>
      <h1 className="l-footer__copyright">@ 2024 M-Watanabe</h1>
    </footer>
  );
}