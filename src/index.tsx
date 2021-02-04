import * as React from 'react';
import { render } from 'mjml-react';

import { BasicTemplate, BasicTemplateProps } from './templates/basic';
import {
  BasicWithAvatarTemplate,
  BasicWithAvatarTemplateProps,
} from './templates/basic-with-avatar';
import {
  NewSupporterTemplate,
  NewSupporterTemplateProps,
} from './templates/new-supporter';
import {
  ReferralTxTemplate,
  ReferralTxTemplateProps,
} from './templates/referral-tx';
import { MonthlyReportCreatorTemplate } from './templates/reports/monthly/creator';
import { MonthlyReportCreatorTemplateProps } from './templates/reports/monthly/creator/types';
import { MonthlyReportCivicLikerV1Template } from './templates/reports/monthly/civic-liker/v1';
import { MonthlyReportCivicLikerV1TemplateProps } from './templates/reports/monthly/civic-liker/v1.types';
import { MonthlyReportCivicLikerV2Template } from './templates/reports/monthly/civic-liker/v2';
import { MonthlyReportCivicLikerV2TemplateProps } from './templates/reports/monthly/civic-liker/v2.types';

export const getBasicTemplate = (props: BasicTemplateProps) => {
  const { html } = render(<BasicTemplate {...props} />);
  return html;
};

export const getBasicWithAvatarTemplate = (
  props: BasicWithAvatarTemplateProps
) => {
  const { html } = render(<BasicWithAvatarTemplate {...props} />);
  return html;
};

export const getNewSupporterTemplate = (props: NewSupporterTemplateProps) => {
  const { html } = render(<NewSupporterTemplate {...props} />);
  return html;
};

export const getReferralTxTemplate = (props: ReferralTxTemplateProps) => {
  const { html } = render(<ReferralTxTemplate {...props} />);
  return html;
};

export const getMonthlyReportCreatorTemplate = (
  props: MonthlyReportCreatorTemplateProps
) => {
  const { html } = render(<MonthlyReportCreatorTemplate {...props} />);
  return html;
};

export const getMonthlyReportCivicLikerV1Template = (
  props: MonthlyReportCivicLikerV1TemplateProps
) => {
  const { html } = render(<MonthlyReportCivicLikerV1Template {...props} />);
  return html;
};

export const getMonthlyReportCivicLikerV2Template = (
  props: MonthlyReportCivicLikerV2TemplateProps
) => {
  const { html } = render(<MonthlyReportCivicLikerV2Template {...props} />);
  return html;
};
