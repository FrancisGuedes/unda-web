import { functionalityAlias } from '../../utils/strings';
import { createClassName } from '../../utils/utility';
import { LabelAppParagraph } from '../app-paragraph/appParagraph';
import './appTitle.module.scss';

interface AppTitleProps {
  id?: string | undefined;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
  title?: string | undefined;
}

const AppTitle = ({
  id,
  className,
  children,
  title
}: AppTitleProps) => {

  const labelAppParagraph: LabelAppParagraph = {...functionalityAlias.component.appTitle};
  const classes: string = createClassName(labelAppParagraph.defaultClassName, className);

  return (
    <>
      <h1
        id={id}
        className={classes}
        title={title}
      >
        {children}
      </h1>
    </>
  );
}

export default AppTitle;