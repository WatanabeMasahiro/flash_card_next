import { BacktotopArrow } from '@/app/components/elements/arrow/BacktotopArrow';
import { footerCopyright } from '@/app/_const/footerCopyright';

type Props = {
  scrollPosition: number;
  scrollTotopFunc: VoidFunction;
}

export const Footer = (props: Props): JSX.Element => {
  const { scrollPosition, scrollTotopFunc } = props;

  return (
    <footer className="l-footer">
      <div className="c-arrow">
        <BacktotopArrow scrollPosition={scrollPosition} scrollTotopFunc={() => scrollTotopFunc()} />
      </div>
      <h1 className="l-footer__copyright">{ footerCopyright }</h1>
    </footer>
  );
}