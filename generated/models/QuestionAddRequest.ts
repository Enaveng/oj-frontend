/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JsonConfig } from './JsonConfig';
import type { JudgeCase } from './JudgeCase';

export type QuestionAddRequest = {
    answer?: string;
    content?: string;
    judgeCase?: Array<JudgeCase>;
    judgeConfig?: JsonConfig;
    tags?: Array<string>;
    title?: string;
};
