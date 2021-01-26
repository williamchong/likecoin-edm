import * as React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlBody,
  MjmlAttributes,
  MjmlAll,
  MjmlText,
} from 'mjml-react';

import * as Colors from '../constants/colors';

import { IntlProvider } from '../i18n';

function getThemeConfig(opts: { isExtruded?: boolean } = {}) {
  const { isExtruded = false } = opts;
  const templateWidth = isExtruded ? 616 : 600;
  return {
    templateWidth,
    sectionWidth: templateWidth,
    sectionPaddingX: isExtruded ? 40 : 32,
    sectionBgURL: isExtruded
      ? 'https://static.like.co/edm/templates/basic/bg.jpg'
      : '',
    sectionBgColor: isExtruded ? 'white' : Colors.GreyF7,
  };
}

const ThemeContext = React.createContext(getThemeConfig());

export const useTheme = () => React.useContext(ThemeContext);

export interface TemplateBaseProps extends React.PropsWithChildren<{}> {
  isExtruded?: boolean;
  language?: string;
}

export const TemplateBase = (props: TemplateBaseProps) => {
  const { isExtruded = false, language } = props;
  const theme = getThemeConfig({ isExtruded });
  return (
    <IntlProvider language={language}>
      <ThemeContext.Provider value={theme}>
        <Mjml>
          <MjmlHead>
            <MjmlAttributes>
              <MjmlAll
                fontFamily="Arial"
                fontSize="14px"
                color={Colors.Grey4A}
                padding={0}
              />
              <MjmlText lineHeight="1.5" />
            </MjmlAttributes>
          </MjmlHead>
          <MjmlBody backgroundColor="white" width={theme.templateWidth}>
            {props.children}
          </MjmlBody>
        </Mjml>
      </ThemeContext.Provider>
    </IntlProvider>
  );
};
