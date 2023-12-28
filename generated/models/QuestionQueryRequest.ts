/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JsonConfig } from './JsonConfig';
import type { JudgeCase } from './JudgeCase';

export type QuestionQueryRequest = {
    acceptedNum?: number;
    answer?: string;
    content?: string;
    current?: number;
    id?: number;
    judgeCase?: Array<JudgeCase>;
    judgeConfig?: JsonConfig;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    tags?: Array<string>;
    title?: string;
    userId?: number;
};
